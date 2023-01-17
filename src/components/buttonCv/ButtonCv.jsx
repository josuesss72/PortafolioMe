import React from 'react'; 

const ButtonCv = ({ color }) => {
  const style = {
    color
  }
  return (
    
    <button style={style} className='btn_header'><a href='../../../Josue Daniel Sarmiento Vides.pdf' download='Josue Daniel Sarmiento Vides.pdf'>Donwload CV</a></button>
	
  )
}

export default ButtonCv 

