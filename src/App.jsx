import React from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Favorites from './components/Favorites'
import BookDetails from './components/BookDetails'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
