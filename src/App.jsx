// import { useState } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './componentes/Nav'
import Gen1 from './componentes/Gen1'
import Gen2 from './componentes/Gen2'
import Gen3 from './componentes/Gen3'
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
          <Route path='/Gen3' element={<Gen3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
