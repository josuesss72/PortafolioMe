import React  from 'react'; 
import styles from './Header.module.css'
import EmojiMe from './components/emojiMe/EmojiMe';

const Header = () => {
  // component header
  
  return (
    <header className={styles.header}>
      <section className={styles.containerLogo}>
        <EmojiMe/> 
        <article className={styles.containerName}>
          <h1>Josue Sarmiento</h1>
          <h2>Developer</h2>
        </article>
      </section>
      <section className={styles.containerNavigation}>
        <ul className={styles.containerUl}>
          <li className={styles.item}>Contact</li>
          <li className={styles.item}>Proyects</li>
          <li className={styles.item}>About</li>
        </ul>
        <button className={styles.button}>Download CV</button>
      </section>
    </header>	
  )
}

export default Header
