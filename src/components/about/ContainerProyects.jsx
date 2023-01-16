import Proyect from '../../components/about/Proyect'
import {getProyects} from '../../utils/proyects'

const ContainerProyects = () => {
  const proyects = getProyects()[0].proyects

  return (
    <>
      <span id='proyects'></span>
      <section  className='container_proyects'>
        {
          proyects.map(proyect => {
            return (
              <Proyect key={ proyect.id } proyect={ proyect }/>
            )  
          }) 
        } 
      </section>
    </> 
  )
}

export default ContainerProyects

