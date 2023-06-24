// Sebelum memakai dispatch reducer
// import { createContext, useContext, useEffect, useState } from "react";

// export const AppContext = createContext({
// 	empty: true
// })

// export function useAppContext(){
// 	return useContext(AppContext)
// }

// export function AppProvider({children}){
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

// 	const appContextValue = {
// 		user,
// 		setUser,
// 		func: () => alert('testing, bro!'),
// 		theme,
// 		setTheme,
// 	}

// 	return (
// 		<AppContext.Provider value={appContextValue}>
// 			{children}
// 		</AppContext.Provider>
// 	)
// }



// Setelah memakai dispatch reducer
import { createContext, useContext, useEffect, useReducer, useState } from "react";

export const AppContext = createContext({})

export function useAppContext() {
	return useContext(AppContext)
}

function reducer(state, action) {
	switch (action.type) {
		case 'updateUser':
			return { ...state, user: action.payload };
		default:
		throw new Error(`Error dari action type: ${action.payload}`)
	}

}

const initialState = {
	user: [],
}

export function AppProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		const user = {
			name: 'Ujang',
			avatar: 'https://img.lovepik.com/element/40128/7461.png_1200.png'
		}
		dispatch({
			type: 'updateUser',
			payload: user,
		})
	}, [])

	const appContextValue = [state, dispatch]

	return (
		<AppContext.Provider value={appContextValue}>
			{children}
		</AppContext.Provider>
	)
}
