import React  from 'react'; 
import styles from './Header.module.css'
import EmojiMe from './components/emojiMe/EmojiMe';
import { Tabs, TabList, Tab } from '@chakra-ui/tabs';

const Header = () => {
  // component header
  
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
        <Tabs>
          <TabList>
            <Tab color={"var(--primary-500-color)"}>Contact</Tab>
            <Tab color={"var(--primary-500-color)"}>Proyect</Tab>
            <Tab color={"var(--primary-500-color)"}>About</Tab>
          </TabList>
        </Tabs>
        <button className={styles.button}>Download CV</button>
      </section>
    </header>	
  )
}

export default Header
