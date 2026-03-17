import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Semster from './pages/Semster'
import ViewCourse from './pages/ViewCourse'
import Projects from './pages/Projects'

function App() {
  return(
    <BrowserRouter>
       <Routes>
        <Route  path='/' element={<Semster/>}/>
        <Route path='/course' element={<ViewCourse/>}/>
        <Route path='/projects' element={<Projects />}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
