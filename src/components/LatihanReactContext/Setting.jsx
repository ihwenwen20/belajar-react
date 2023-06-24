// Sebelum pakai reducer
// import { useContext } from "react";
// import { AppContext, useAppContext } from "../../context/app-context";

// const Setting = () => {
// Sebeluim pakai provider sendiri
// const context=useContext(AppContext)
// console.log(context)

// Setelah kita pakai provider sendiri
// const context = useAppContext()

// 	return (
// 		<>
// 		<input type="text"
// 		// onChange={(e)=> console.log(e.target.value)} placeholder="Change Name"/>
// 		onChange={(e)=> context.setUser({
// 			...context.user,
// 			// Ingat, kalo d react ketika kita ngeset state/object, artinya kita mengganti state yg lama dengan state/object yang baru,
// 			// maka dari itu, kita merge dulu dengan mengambil data dari state yg lama yg ada di context, kemudian kita ganti/edit state yg ingin kita edit seperti di bawah
// 			name: e.target.value,
// 		})} placeholder="Change Name" value={context.user.name ?? ''} />
// 		</>
// 	)
// }

// export default Setting;



// Setelah pakai reducer
import { useAppContext } from "../../context/app-context";

const Setting = () => {
	// Sebeluim pakai provider sendiri
	// const context=useContext(AppContext)
	// console.log(context)

	// Setelah kita pakai provider sendiri
	// const context = useAppContext()

	// Setelah kita pakai reducer.. Dan karena state nya kita gak pakai, kita skip state nya dengan tanda koma pada argument pertama
	const [state, dispatch] = useAppContext()

	return (
		<>
			<input type="text" onChange={(e) => dispatch({
				type: 'updateUser',
				payload: {
					...state.user,
					// Ingat, kalo d react ketika kita ngeset state/object, artinya kita mengganti state yg lama dengan state/object yang baru,
					// maka dari itu, kita merge dulu dengan mengambil data dari state yg lama yg ada di context, kemudian kita ganti/edit state yg ingin kita edit seperti di bawah
					name: e.target.value,
				}
			})} placeholder="Change Name" value={state.user.name ?? ''} />
		</>
	)
}

export default Setting;