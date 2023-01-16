import React, {useState} from 'react'; 

const Header = () => {
  const [ isShowNav, setIsShowNav ] = useState(false)

  const handleClick = () => {
    setIsShowNav(true)
  }
  const handleClickClouse = () => {
    setIsShowNav(false)
  }
  const ClickNavigation = (e) => {
    const id = e.target.id
    if(id === 'home'){
      window.location.href = "#home" 
    }else if(id === 'about'){
      window.location.href = "#about"
    }
  }
  return (
    <header className='header'>
      <h1>JhosuaSR</h1>
      <div className='menu'>
        <ul onClick={ClickNavigation} className={`nav ${isShowNav && 'show_nav'}`}>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About me</a></li>
          <li><a href='#proyects'>Proyects</a></li>
          <li><a href='#contact'>Contact</a></li>
          <button className='btn_header'><a href='../../../Josue Daniel Sarmiento Vides.pdf' download='Josue Daniel Sarmiento Vides.pdf'>Donwload CV</a></button>
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

