import React from 'react'
import '../../components/about/Proyect.css'
import SliderSkills from '../../components/slider_skills/SliderSkills'
import '../../components/slider_skills/SliderSkills.css'

const About = () => {


  return (
    <>
      <span style={{padding: '1rem'}} id='about'></span>
      <div  className='about'>
        <p className='text_preset'>
          Hola, me llamo Josué Sarmiento Vides tengo 20 años.
          He desarrollado experiencia como Front-End desarrollando aplicaciones 
          y paginas web en proyectos Universitarios, manejo tecnologías de buen 
          desempeño actualmente, como JavaScript, HTML5, Sass, Reactjs, Redux, 
          Nodejs y Git. Sigo aprendiendo nuevas tecnologías para superarme a mi mismo, 
          me siento capaz de colaborar y trabajar de la mano con un equipo  y presentar 
          soluciones a problemas de la Empresa. Espero ser parte del proyecto y ayudar a 
          cumplir los objetivos.
        </p>
        <div className='img_slider'>
          <SliderSkills/>
        </div>
      </div>
    </> 
  )
}

export default About
