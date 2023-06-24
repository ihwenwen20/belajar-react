import { useContext } from "react";
import { AppContext, useAppContext } from "../../context/app-context";
import { useThemeContext } from "../../context/theme-context";

const DisplayTheme = () => {
	// Sebelum dibikin Provider sendiri
	// const context = useContext(AppContext)

	// Setelah dibuatkan provider sendiri
	// const context = useAppContext()

	// setelah kita pakai reducer
	// const [state] = useAppContext()

	// Setelah displit
	const [state] = useThemeContext()
	console.log('DisplayTheme: render')


	return (
		<>
			{/* sebelum kita pkaia reducer */}
			{/* <div>{context.theme}</div> */}

			{/* Setelah kita pakai reducer */}
			<div>{state.theme}</div>
		</>
	)
}

export default DisplayTheme;