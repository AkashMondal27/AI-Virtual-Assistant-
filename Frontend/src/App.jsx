import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import SingUp from './pages/SingUp'
import SingIn from './pages/SingIn'

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SingUp/>}/>
      <Route path='/signin' element={<SingIn/>}/>

    </Routes>
  )
}

export default App
