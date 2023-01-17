import Typed from "typed.js"
import { useEffect, useRef } from "react"
import ButtonCv from "../../components/buttonCv/ButtonCv"

const Home = () => {
	
	const el = useRef(null)
	
	useEffect(()=>{
		const typed = new Typed(el.current, {
			strings:["Front-End Developer"],
			typeSpeed: 75,
			startDelay: 300,
			showCursor: false
		})
	},[])

	return (
		<>
			<span id="home"></span>
			<article  className='title'>
			<div className="box_img_home">
				<img src="../../../images/me2.jpg" alt="" />
			</div>
			<div className="box_title">
				<h1 ref={el}></h1>
				<div className="box_text_home">
					<p className="text_home">Me especializo en React.js para el desarrollo de aplicaciones web en el ambito front-end completamente responsive y que se ajuste a tus necesidades como cliente. </p>
					<ButtonCv color='white'/>
				</div>	
					
				<h2><a href="#about">Informacion sobre mi 👇🏽</a></h2>
			</div>
		</article>
		</>	
	)
}

export default Home
