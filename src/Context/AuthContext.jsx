import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { setDoc, doc, getDoc } from 'firebase/firestore'

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})
    function signUp(email, password, username, phone) {
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            setDoc(doc(db, 'users', email), {
                id: res.user.uid,
                username: username,
                email: res.user.email,
                phone: phone,
            })
        })
    }

    function signIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])


    return <AuthContext.Provider value={{ signIn, signUp, logOut, user   }}> {children} </AuthContext.Provider>
}

export function UserAuth() {
    return useContext(AuthContext)
}