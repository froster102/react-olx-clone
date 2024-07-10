import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'
import Signup from './Pages/Signup'
import { AuthContextProvider } from './Context/AuthContext'
import View from './Pages/View'
import { ProductContextProvider } from './Context/ProductContext'
import Protected from './Protected'
import NotFound from './Pages/NotFound'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/' element={<ProductContextProvider><Home></Home></ProductContextProvider>}></Route>
          <Route path='/add-product' element={<Protected><ProductContextProvider><AddProduct></AddProduct></ProductContextProvider></Protected>} ></Route>
          <Route path='/view/:id' element={<ProductContextProvider><View></View></ProductContextProvider>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </AuthContextProvider>


    </>
  )
}

export default App
