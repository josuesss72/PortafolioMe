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
  imgBg,
  marg
  }) => {
  
  console.log(imgBg)
  const styleSection = {
    backgroundColor: bgcolor,
    height: large,
    width: width,
    borderRadius: brdR,
    border: brd,
    placeContent: content,
    backgroundImage: `url(${imgBg && imgBg[0]})` ,
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
