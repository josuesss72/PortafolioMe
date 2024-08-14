import React  from 'react'; 
import styles from './Header.module.css'
import EmojiMe from './components/emojiMe/EmojiMe';
import { Tabs, TabList, Tab } from '@chakra-ui/tabs';
import {useLocation, useNavigate} from 'react-router';

// component header
const Header = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation() // obtiene el path current 

  // Los indices que le corresponde a cada path decuerdo a las Tabs
  const indexPaths = {
    contact: 0,
    proyects: 1,
    about: 2
  }
  
  return (
    <header className={styles.header}>
      <section className={styles.containerLogo}>
        <EmojiMe/> 
        <article className={styles.containerName}>
          <h1 className={styles.title}>Josue Sarmiento</h1>
          <h2 className={styles.subtitle}>Developer</h2>
        </article>
      </section>
      <section className={styles.containerNavigation}>
        <Tabs defaultIndex={indexPaths[pathname.slice(1)]}>
          <TabList>
            <Tab onClick={() => navigate('/contact')} color={"var(--primary-500-color)"}>Contact</Tab>
            <Tab onClick={() => navigate('/proyects')} color={"var(--primary-500-color)"}>Proyect</Tab>
            <Tab onClick={() => navigate('/about')} color={"var(--primary-500-color)"}>About</Tab>
          </TabList>
        </Tabs>
        <button className={styles.button}>Download CV</button>
      </section>
    </header>	
  )
}

export default Header
