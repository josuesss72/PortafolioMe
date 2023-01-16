import React from 'react'

const Section = ({
  bgcolor, 
  large, 
  element, 
  width, 
  brdR, 
  header, 
  brd, 
  content, 
  marg
  }) => {
  
  const styleSection = {
    backgroundColor: bgcolor,
    height: large,
    width: width,
    borderRadius: brdR,
    border: brd,
    placeContent: content,
    margin: marg
  }
  if(window.scrollY < 0){
    console.log('scrolling')
  }
  
  return (
    <section style={styleSection} className='section'>
      {header}
      {element}
    </section>
  )
}

export default Section
