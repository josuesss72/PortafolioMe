import React, {useRef} from 'react'

const SliderSkills = () => {

	const Skills = ({ icon, lengues }) => {
		return (
			<div className='skill'>
				{ icon }
				<h4 className='lengues_text'>{ lengues }</h4>
			</div>
		)
	}

	const ref = useRef(null)
	let nScroll = 300

	const handleClick = () => {
		ref&& ref.current.scroll(nScroll, 0)
		nScroll += 100
	}
	const handleClickBefore = () => {
		ref&& ref.current.scroll(-100, 0)
	}

  return (
    <div className='sliderSkills'>
       <button onClick={handleClickBefore} className='btn_slider_skills'>
				<i className='bx bxs-chevron-left'></i>
			 </button>
			 <div ref={ref} className='container_skills'>
				<Skills 
					icon={ <i className='bx bxl-javascript icon_skill'></i>}
					lengues={'JavaScript'}
				/>
				<Skills 
					icon={ <i className='bx bxl-html5 icon_skill' ></i> }
					lengues={'HTML'}
				/>
				<Skills 
					icon={ <i className='bx bxl-css3 icon_skill' ></i> }
					lengues={'CSS'}
				/>
				<Skills 
					icon={ <i className='bx bxl-react icon_skill' ></i> }
					lengues={'React'}
				/>
			 </div>
       <button onClick={handleClick} className='btn_slider_skills'>
				<i className='bx bxs-chevron-right' ></i>
			 </button>
    </div>
  )
}

export default SliderSkills
