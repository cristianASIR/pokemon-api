// import { useState } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Index from './rutas/Index'
import Add from './rutas/Add'
import Navbar from './componentes/Nav'
import Gen1 from './componentes/Gen1'
import Gen2 from './componentes/Gen2'
import Random1 from './componentes/Gen2'
function App() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
      <BrowserRouter>
        
        <Routes>
          {/* <Route path='/' element={<Random1 />} /> */}
          <Route path='/' element={<Gen1 />} />
          <Route path='/Gen2' element={<Gen2 />} />
          <Route path='/' element={<Gen1 />} />
          <Route path='/pokemon/:id' element={<Add />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
