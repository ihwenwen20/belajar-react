import { useContext } from "react"
import { AppContext, useAppContext } from "../../context/app-context"

export default function NavbarUserAvatar() {
	// Sebeluim pakai provider sendiri
	// const context=useContext(AppContext)
	// console.log(context)

	// Setelah kita pakai provider sendiri
	// const context = useAppContext()

	// Setelah kita pakai reducer.. Dan karena state nya kita gak pakai, kita skip state nya dengan tanda koma pada argument pertama
	const [state] = useAppContext()
	console.log('NavbarUserAvatar: render')

	return (
		// Sebelum pakai reducer
		// <img src={context?.user?.avatar} alt='avatar' width={50} />

		// Setelah pakai reducer
		<img src={state?.user?.avatar} alt='avatar' width={50} />
	)
}
