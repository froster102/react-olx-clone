import { useState, useEffect, createContext, useContext } from "react";
import { auth, db, storage } from "../firebase";
import { setDoc, getDoc, doc, addDoc, collection, getDocs } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

export const ProductContext = createContext()

export function ProductContextProvider({ children }) {
    const [products, setProducts] = useState([])
    const [seller, setSeller] = useState({})

    function createProduct(name, category, price, description, email, file) {
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()
        const formatedDate = `${day}/${month}/${year}`
        const storageRef = ref(storage, 'images/' + file.name)
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('uploaded', snapshot)
            getDownloadURL(snapshot.ref).then((url) => {
                console.log('Url' + url)
                addDoc(collection(db, 'products'), {
                    name: name,
                    category: category,
                    price: price,
                    userId: email,
                    imageUrl: url,
                    description: description,
                    addedAt: formatedDate
                })
            })
        })
    }

    async function getProducts() {
        try {
            const querySnapshot = await getDocs(collection(db, 'products'))
            const products = []
            querySnapshot.forEach((doc) => {
                products.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setProducts(products)

        } catch (e) {
            console.log(e)
        }
    }

    async function getProductById({ id }) {
        try {
            const querySnapshot = await getDoc(doc(db, 'products', id))
            return querySnapshot.data()
        } catch (e) {
            console.log(e)
        }
    }

    async function getUserById(id) {
        try {
            const res = await getDoc(doc(db, 'users', id))
            return res.data()
        } catch (e) {
            console.log(e)
            console.log(id)
        }

    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ createProduct, getProducts, getProductById, getUserById, seller, products }}>
            {children}
        </ProductContext.Provider>
    )
}

