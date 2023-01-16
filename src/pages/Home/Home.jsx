import Typed from "typed.js"
import { useEffect, useRef } from "react"

const Home = () => {
	
	const el = useRef(null)
	
	useEffect(()=>{
		const typed = new Typed(el.current, {
			strings:["Hola 👦🏽, soy Josue bienvanido a mi portafolio 💼"],
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
				<h2><a href="#about">Informacion sobre mi 👇🏽</a></h2>
			</div>
		</article>
		</>	
	)
}

export default Home
