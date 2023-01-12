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
    <section>
      <ul className='container_social'>
        {
          socials.map(social => (
            <Social key={social.id} social={social}/> 
          ))
        } 
      </ul> 
    </section>	
  )
}

export default Footer 

