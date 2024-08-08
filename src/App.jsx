import styles from './App.module.css'
import Layout from './components/layout/Layout'
import Presentation from './components/presentation/Presentation'
import Home from './pages/Home/Home'

// App component that encompasses layout and routing 
function App() {
  return (
    <div className={styles.container}>
      <Presentation/>
      <Layout>
        <Home/>
      </Layout>
    </div> 
  )
}

export default App
