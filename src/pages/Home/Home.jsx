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
		<article className='title'>
			<h1 ref={el}></h1>
			<h2><a href="">Informacion sobre mi 👇🏽</a></h2>
		</article>
	)
}

export default Home