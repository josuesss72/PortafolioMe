
import './App.css'
import Section from './components/section/Section'
import './components/section/Section.css'
import Home from './pages/Home/Home'
import './pages/Home/Home.css'
import About from './pages/about/About'
import '../src/pages/about/About.css'
import ContainerProyects from './components/about/ContainerProyects'
import './components/about/ContainerProyects.css'
import Footer from './components/footer/Footer'
import './components/footer/Footer.css'
import Header from './components/header/Header'
import './components/header/Header.css'

function App() {


  return (
    <div className="App">
      <Header/>
      <Section bgcolor='#364252' width='100%' large='800px' element={<Home/>}/>
      <Section content='center' bgcolor='white' width='100%' element={<About/>}/>
      <Section bgcolor='' marg='2rem 0 2rem 0' width='100%' large='800px' element={<ContainerProyects/>}/>
      <Section width='100%' large='400px' bgcolor='#364252' element={<Footer/>}/>
    </div>
  )
}

export default App
