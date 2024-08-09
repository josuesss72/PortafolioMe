import React, {useEffect} from 'react'; 
import styles from './Presentation.module.css'
import { motion } from 'framer-motion';
import {useAnimations} from '../../hooks/useAnimations';
import {useNavigate} from 'react-router';

const Presentation = () => {
  const { transitionRight, fade, transitionLeft, transitionBottom} = useAnimations() 
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/proyects') 
    }, 5100)
  }, [])

  return (
    <section className={styles.container}>
      <motion.div 
        className={styles.containerImg}
        initial={fade.initial}
        animate={fade.animate}
        transition={{delay: 0.5, duration: 2 }} 
      >
        <img className={styles.image} src="/Avatars/waving doorway.png" alt="" />
        <div className={styles.mask}></div>
        <div className={styles.mask}></div>
      </motion.div>
      <article className={styles.containerText}>
        <motion.h2 
          className={styles.subtitle}
          initial={transitionRight.initial}
          animate={transitionRight.animate}
          transition={{ delay: 1, duration: 1 }}
        >
          Hi, my name is
        </motion.h2>
        <motion.h1 
          className={styles.title}
          initial={transitionLeft.initial}
          animate={ transitionLeft.animate }
          transition={{ delay: 1.5, duration: 1 }}
        >
          Josue Sarmiento
        </motion.h1>
        <motion.h3 
          className={styles.text}
          initial={transitionBottom.initial}
          animate={transitionBottom.animate}
          transition={{ delay: 2, duration: 1 }}
        >
          Developer 
          <span className={styles.highlighted}>Web full Stack</span>
        </motion.h3>
      </article> 
    </section>	
  )
}

export default Presentation 

