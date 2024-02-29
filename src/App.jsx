import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Head from './screens/Head'
import Days from './screens/Days'
import Views from './screens/Views'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Head/>}/>
        <Route path='/days' element={<Days/>}/>
        <Route path='/views/:id' element={<Views/>}/>
      </Routes>
    </>
  )
}

export default App
