import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import AddRecipe from './components/AddRecipes'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/B' element={<AddRecipe/>} />
          <Route path='/C' element={<Login/>} />
        </Routes>
     </>
  )
}

export default App
