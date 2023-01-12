import React from 'react'; 


const Proyect = ({ proyect }) => {

  const handleClick = () => {
  }
  return (
    <article onClick={handleClick} className='proyect'>
      <header className='header_proyect'>
        <div className='box_img'>
          <img src={proyect.img} alt="" />
        </div>
        <div className='bg_text'>
          <div className='hover_bg'>
            {proyect.name}
            <ul className='box_links_proyect'>
              <li>
                <a className='link_proyect' href={proyect.url} target='_blank'>
                  <i className='bx bxl-netlify'></i>
                </a>
              </li>
              <li>
                <a className='link_proyect' href={proyect.gitHub} target='_blank'>
                  <i className='bx bxl-github'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </article>
  )
}

export default Proyect 

