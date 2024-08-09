import styles from './App.module.css'
import Presentation from './components/presentation/Presentation'
import { Routes, Route } from 'react-router'
import ProyectsPage from './pages/ProyectsPage/ProyectsPage'

// App component that encompasses layout and routing 
function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Presentation/>}/>
        <Route path='/proyects' element={<ProyectsPage/>}/> 
      </Routes>
    </div> 
  )
}

export default App
