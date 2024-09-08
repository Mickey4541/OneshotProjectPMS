
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import CreateProduct from './pages/Create/CreateProduct'
import EditProduct from './pages/Edit/EditProduct'
import SingleProduct from './pages/Single/SingleProduct'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<CreateProduct/>}/>
            <Route path='/edit' element={<EditProduct/>}/>
            <Route path='/product' element={<SingleProduct/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
