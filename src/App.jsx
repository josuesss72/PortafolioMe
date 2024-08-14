import styles from './App.module.css'
import Presentation from './components/presentation/Presentation'
import { Routes, Route } from 'react-router'
import ProyectsPage from './pages/ProyectsPage/ProyectsPage'
import About from './pages/about/About'
import Layout from './components/layout/Layout'
import Contact from './pages/contact/Contact'

// App component that encompasses layout and routing 
function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Presentation/>}/>
        <Route path='/' element={<Layout/>}>
          <Route path='/proyects' element={<ProyectsPage/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </div> 
  )
}

export default App
