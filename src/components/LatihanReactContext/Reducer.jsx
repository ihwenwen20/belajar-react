import { useReducer, useState } from "react";

// fungsi pada reducer menerimana 2 parameter, state, dan action
function reducer(state, action) {
	// console.log(state, action)
	// state = state default nya, atau state saat ini yg sama dengan 0.
	// action memanggil nilai dari argumen di dalam dispatch action handle nya, contoh di bawah pada onClick

	switch (action.type) {
		case 'increment':
			return state + 1;
		// contoh sebelum menggunakan dispatch
		// case 'decrement':
		// 	return state - action.payload;

		// contoh setelah menggunakan dispatch, yg mana dispatch ini adalah object
		case 'decrement':
			return { ...state, count: state.count - action.payload };
		case 'toogleTheme':
			return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
		default:
			throw new Error()

	}
}

const initialState = {
	count: 0,
	theme: 'dark'
}

const Reducer = () => {
	// const [count, setCount] = useState(0)
	// useReudcer menerima 2 parameter, 1 parameter fungsi, 2 default value nya
	// const [count, setCount] = useReducer(reducer, 0)
	// Atau bisa juga menerima value yg state nya object.
	// karena pada object datanya tidak hanya satu, jadi state count tadi diganti dengan state. dan setCount nya diganti jadi dispatch
	// untuk merepresentasikan data yg ada di dlm object initialState
	const [state, dispatch] = useReducer(reducer, initialState)
	// console.log(state)


	return (
		<>
			{/* Sebelum memakai reducer */}
			{/* <button onClick={() => setCount(count - 1)}>-</button >
			<span>{count}</span>
			<button onClick={() => setCount(count + 1)}> +</button > */}

			{/* Setelah memakai reducer */}
			{/* <button onClick={() => setCount({type: 'decrement', payload: 2})}>-</button >
			<span>{count}</span>
			<button onClick={() => setCount({type: 'increment'})}> +</button > */}

			{/* Setelah memakai reducer dan  */}
			<button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>-</button >
			{/* jangan lupa kita tambahkan juga data apa saja yg ingin di represantikan, contoh dibawah */}
			<span>{state.count}</span>
			<button onClick={() => dispatch({ type: 'increment' })}> +</button >

			Theme: {state.theme}
			<button onClick={() => dispatch({ type: 'toogleTheme' })}>Toogle Theme</button>
		</>
	)
}

export default Reducer;