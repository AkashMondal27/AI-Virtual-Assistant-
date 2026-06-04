import React from 'react'
import { Route ,Routes } from 'react-router-dom'
import SingUp from './pages/SingUp'
import SingIn from './pages/SingIn'
import Customize from './pages/Customize'

const App = () => {
  return (
    <Routes>
      <Route path='/signup' element={<SingUp/>}/>
      <Route path='/signin' element={<SingIn/>}/>
      <Route path='/customize' element={<Customize/>}/>

    </Routes>
  )
}

export default App
