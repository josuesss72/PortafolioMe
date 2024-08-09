import React  from 'react'; 
import styles from './Header.module.css'

const Header = () => {
  // component header
  // Note: Finish the component, design it and add some animations. 
  
  return (
    <header className={styles.header}>
      <section className={styles.containerLogo}>
        <article className={styles.containerImage}>
          <img src="/Avatars/logo.png" alt="" />
          <img src="/Avatars/logo-2.png" alt="" />
        </article> 
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
