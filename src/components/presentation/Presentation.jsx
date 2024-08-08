import React from 'react'; 
import styles from './Presentation.module.css'

const Presentation = () => {
  return (
    <section className={styles.container}>
      <article className={styles.containerImg}>
        <img className={styles.image} src="/Avatars/waving doorway.png" alt="" />
      </article>
      <article className={styles.containerText}>
        <h2 className={styles.subtitle}>Hi, my name is</h2>
        <h1 className={styles.title}>Josue Sarmiento</h1>
        <h3 className={styles.text}>Developer <span className={styles.highlighted}>Web full Stack</span></h3>
      </article> 
    </section>	
  )
}

export default Presentation 

