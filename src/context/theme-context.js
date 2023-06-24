// Sebelum memakai dispatch reducer
// import { createContext, useContext, useEffect, useState } from "react";

// export const ThemeContext = createContext({
// 	empty: true
// })

// export function useThemeContext(){
// 	return useContext(ThemeContext)
// }

// export function ThemeProvider({children}){
// 	const [user, setUser] = useState({})
// 	const [theme, setTheme] = useState('dark')
// 	// const [theme, setTheme] = useReducer()

// 	useEffect(() => {
// 		const user = {
// 			name: 'Ujang',
// 			avatar: 'https://img.lovepik.com/element/40128/7461.png_1200.png'
// 		}
// 		setUser(user)
// 	}, [])

// 	const ThemeContextValue = {
// 		user,
// 		setUser,
// 		func: () => alert('testing, bro!'),
// 		theme,
// 		setTheme,
// 	}

// 	return (
// 		<ThemeContext.Provider value={ThemeContextValue}>
// 			{children}
// 		</ThemeContext.Provider>
// 	)
// }



// Setelah memakai dispatch reducer
import { createContext, useContext, useReducer} from "react";

export const ThemeContext = createContext({})

export function useThemeContext() {
	return useContext(ThemeContext)
}

function reducer(state, action) {
	switch (action.type) {
		case 'toogleTheme':
			return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
		default:
			throw new Error(`Error dari action type: ${action.payload}`)
	}

}

const initialState = {
	theme: 'dark'
}

export function ThemeProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)

	const themeContextValue = [state, dispatch]

	return (
		<ThemeContext.Provider value={themeContextValue}>
			{children}
		</ThemeContext.Provider>
	)
}
