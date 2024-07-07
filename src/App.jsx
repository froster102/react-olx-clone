import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import AddProduct from './Pages/AddProduct'

function App() {

  return (
    <>
    <Routes>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/add-product' element={<AddProduct></AddProduct>} ></Route>
    </Routes>
    </>
  )
}

export default App
