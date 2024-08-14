import React from 'react'; 
import Header from './components/header/Header';
import styles from './Layout.module.css'
import {Outlet} from 'react-router';

const Layout = () => {
    return (
        <div className={styles.container}>
            <Header/>
            <main>
                <Outlet/> 
            </main>
        </div>	
    )
}

export default Layout 

