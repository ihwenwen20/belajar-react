// import { useEffect } from "react";

// const Latihan4FetchingData = () => {

// 	useEffect(function () {
// 		const getData = fetch('https://jsonplaceholder.typicode.com/users')
// 		// kemudian untuk mengetahui datanya udah selesai di ambil apa belum.
// 		// Kita bisa lihat status nya 200. namun jika gagal atau selain Oke 200
// 		// Karena fetch = return nya promise, maka kita lakukan .then response,
// 		// contoh pada jquey ajax mah callback
// 		.then(function (response) {
// 			// console.log(response)
// 			// Nah, ini baru tahap 2. untuk mengetahui data yg ada pada response,
// 			// kita bisa return json dari response atau console. Contoh :
// 			return response.json()
// 			// console.log(response.json())

// 			// karena json adalah asyncronus, maka kita perlu .then lagi untuk mengetahui datanya udah selesai di ambil apa belum.
// 			// Jadi lakukan .then untuk mengambil promise nya. Ini disebut PROMISE CHAIN/ bercabang
// 		}).then(function (response) {
// 			console.log(response)
// 		})
// 		// console.log(getData)
// 	}, [])

// 	return (
// 		<>
// 			<h1>Fetching Data</h1>
// 		</>
// 	)
// }

// export default Latihan4FetchingData;


/** Cara 2 dengan menggunakan async await, dan lalu kita invoke atau panggil fungsi getData nya */

// import { useEffect } from "react";

// const Latihan4FetchingData = () => {

// 	useEffect(function () {
// 		async function getData() {
// 			const request = await fetch('https://jsonplaceholder.typicode.com/users')
// 			// console.log(request)

// 			const response = await request.json()
// 			console.log(response)
// 		}

// 		// Jangan lupa kita invoke untuk meng excute fungsi nya
// 		getData()
// 	}, [])

// 	// Nah, untuk mengambil data nya, karena response data pada json itu ARRAY,
// 	// Maka selanjutnya kita gunakan useState

// 	return (
// 		<>
// 			<h1>Fetching Data</h1>
// 		</>
// 	)
// }

// export default Latihan4FetchingData;


/** cara mengambil data pada json, karena response data pada json itu ARRAY,
Maka selanjutnya kita gunakan useState.. Kita juga bisa pake datanya untuk di looping */

import { useEffect, useState } from "react";

const Latihan4FetchingData = () => {
	// karena json datanya array, maka state nya harus array
	const [users, setUsers] = useState([])
	// karena dia asyncronus, maka agar ui nya lebih bagus kita set loading nya
	// pikir: default loading itu = true
	const [loading, setLoading] = useState(true)

	useEffect(function () {
		async function getData() {
			const request = await fetch('https://jsonplaceholder.typicode.com/users')
			const response = await request.json()
			// console.log(response)
			// ganti clog nya dengan set
			setUsers(response)
			setLoading(false)
		}

		// Jangan lupa kita invoke untuk meng excute fungsi nya
		getData()
	}, [])

	return (
		<>
			<h1>Fetching Data</h1>
			{/* {loading && <i>Loading data ...</i>}
			{!loading && (
				<ul>
				{users.map(function (user) {
					console.log(user)
					return <li key={user.id}>{user.name}</li>
				})}
			</ul>
			)} */}

			{/* Atau misalnya pakai cara ternary biar lebih simple kode nya */}

			{loading ? (
				<i>Loading data ...</i>
			) : (
				<>
					{users.map(function (user) {
						// console.log(user)
						return <ul key={user.id}>
							<li >Name: {user.name}</li>
							<li>Username: {user.username}</li>
							<br />
						</ul>
					})}
				</>
			)}


		</>
	)
}

export default Latihan4FetchingData;


// Sesuatu hal yang kita lakukan dengan useEffect, dinamakan SIDE EFFECT