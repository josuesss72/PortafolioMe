import React, {useState} from 'react'; 
import ButtonCv from '../buttonCv/ButtonCv';
import '../buttonCv/ButtonCv.css'

const Header = () => {
  const [ isShowNav, setIsShowNav ] = useState(false)

  const handleClick = () => {
    setIsShowNav(true)
  }
  const handleClickClouse = () => {
    setIsShowNav(false)
  }
  
  return (
    <header className='header'>
      <h1>JhosuaSR</h1>
      <div className='menu'>
        <ul  className={`nav ${isShowNav && 'show_nav'}`}>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About me</a></li>
          <li><a href='#proyects'>Proyects</a></li>
          <li><a href='#contact'>Contact</a></li>
          <ButtonCv/>
        </ul>
        <button onClick={ handleClickClouse } className={`btn_menu clouse ${!isShowNav && 'display_none'}`}>
          <i className='bx bx-x'></i>
        </button>
        <button onClick={handleClick} className={`btn_menu ${isShowNav && 'display_none'}`}>
          <i className='bx bx-menu'></i>
        </button>
      </div>
    </header>	
  )
}

export default Header 

