import React from 'react'; 
import { getProyects } from '../../utils/proyects';

const Footer = () => {

  const socials = getProyects()[0].social

  const Social = ({ social }) => {
    return (
      <li className='social'>
        <a href={ social.url } target='_blank'>
          <img className='img_social' src={social.icon} alt="" /> 
        </a> 
        <p>{social.name}</p>
      </li>
    )
  }

  return (
    <section id='contact'>
      <ul className='container_social'>
        {
          socials.map(social => (
            <Social key={social.id} social={social}/> 
          ))
        } 
      </ul> 
      <div>
        <i className='bx bxl-whatsapp icon_whatsapp'>57+ 320-683-1907</i>
      </div>
    </section>	
  )
}

export default Footer 

