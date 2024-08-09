import React, {useState} from 'react'; 
import styles from './EmojiMe.module.css'
import { motion } from 'framer-motion';
import {useAnimations} from '../../../../../../hooks/useAnimations';

const EmojiMe = () => {
  const [mouseEnter, setMouseEnter] = useState(false)
  const { fade } = useAnimations()  

  return (
    <article onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} className={styles.containerImage}>
      <motion.img
        className={styles.image} src="/avatars/logo.png" alt="" 
        initial={{ opacity: 1 }}
        animate={mouseEnter? { opacity: 0 } : { opacity: 1 } }
        transition={{ duration: 0.4 }}
      />
      <motion.img  
        className={styles.image} src="/avatars/logo-2.png" alt="" 
        initial={fade.initial}
        animate={mouseEnter? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
      />
    </article>	
  )
}

export default EmojiMe 

