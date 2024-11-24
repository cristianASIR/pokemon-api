// import { useState } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Index from './rutas/Index'
import Add from './rutas/Add'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/pokemon/:id' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
