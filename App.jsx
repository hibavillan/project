import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar2 from './components/Navbar'
import AddRecipes from './components/AddRecipes'
import Recipes from './components/Recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar2/>
   
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/C' element={<Login/>} />
          <Route path='/B' element={<AddRecipes/>} />
          <Route path='/recipes' element={<Recipes/>} />
        </Routes>
     </>
  )
}

export default App
