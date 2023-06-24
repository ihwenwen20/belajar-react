import React, { useContext } from 'react'
import { AppContext, useAppContext } from '../../context/app-context'

export default function NavbarUserText() {
	// Sebeluim pakai provider sendiri
	// const context=useContext(AppContext)
	// console.log(context)

	// Setelah kita pakai provider sendiri
	// const context = useAppContext()

	// Setelah kita pakai reducer.. Dan karena state nya kita gak pakai, kita skip state nya dengan tanda koma pada argument pertama
	const [state] = useAppContext()
	console.log('NavbarUserText: render')

	return (
		<>
		{/* <span>Hi, User!</span> */}
		{/* Sebelum kita pakai reducer */}
			{/* <span>Hi, {context?.user?.name}!</span>
			<br />
			<br />
			<button onClick={context.func}>Klik</button> */}

			{/* Setelah kita pakai reducer */}
			<span>Hi, {state?.user?.name}!</span>
			<br />
			<br />
			<button onClick={state.func}>Klik</button>
		</>
	)
}
