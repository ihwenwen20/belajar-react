import { useContext } from "react";
import { AppContext, useAppContext } from "../../context/app-context";
import { useThemeContext } from "../../context/theme-context";

const ToogleTheme = () => {
	// Sebeluim pakai provider sendiri
	// const context=useContext(AppContext)
	// console.log(context)

	// Setelah kita pakai provider sendiri
	// const context = useAppContext()

	// Setelah kita pakai reducer.. Dan karena state nya kita gak pakai, kita skip state nya dengan tanda koma pada argument pertama
	// const [, dispatch] = useAppContext()

	// setelah di split
	const [, dispatch] = useThemeContext()

	return (
		<>
			{/* <button onClick={() => context.setTheme('light')}>Toogle Theme</button> */}
			{/* <button onClick={() => context.setTheme(context.theme === 'light' ? 'dark' : 'light')}>Toogle Theme</button> */}

			{/* Setelah kita pakai reducer */}
			<button onClick={() => dispatch({ type: 'toogleTheme' })}>Toogle Theme</button>
		</>
	)
}

export default ToogleTheme;