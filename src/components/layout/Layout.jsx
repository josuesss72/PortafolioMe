import React from 'react'; 
import Header from './components/header/Header';
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Header/>
            {children}
        </div>	
    )
}

export default Layout 

