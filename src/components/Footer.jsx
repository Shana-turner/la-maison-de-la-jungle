import { useState } from 'react'
import '../style/Footer.css'

export function Footer() {
	const [inputValue, setInputValue] = useState('')

	function handleInput(e){
		setInputValue(e.target.value)
	}

	function handleBlur(){
		if(!inputValue.includes('@')){
			alert("Attention, le mail ne contient pas de @ !")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input 
				placeholder='Entrez votre email'
				value={inputValue}
				onChange={handleInput}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

