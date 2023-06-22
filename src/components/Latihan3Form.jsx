// import { useRef } from "react"

// const Latihan3Form = () => {

// 	// Untuk mengambil value input dari DOM Node, disini kita gunakan ref Hooks,
// 	// cara ini bisa disebut UNCONTROL element, karena mirip cara vanila javascript sekali
// 	const namaRef = useRef(null)

// 	function handleSubmit(e){
// 		// default sifat dari form adalah get dan akan meredirect/ reload ke halaman lain.
// 		// untuk mencegah agar tidak di redirect ke halaman lain,
// 		// di butuhkan event.preventDefault() dan aktifkan persintlog pada console chrome
// 		e.preventDefault()
// 		const nama = namaRef.current.value
// 		//  disebut mirip vanila JS, karena kita mengambil DOM Node dari .value di atas
// 		console.log('Mama, aku disubmit')
// 		console.log('Nama:', nama)
// 	}

// 	return (
// 		<>
// 			<form onSubmit={handleSubmit}>
// 			<div>
// 			<label>Nama: </label>
// 				<input type="text" name="nama" ref={namaRef} />
// 			</div>
// 				<button type="submit">Submit</button>
// 			</form>
// 		</>
// 	)
// }

// export default Latihan3Form


// Nah sekarang inilah alternatif cara react dengan menampung data nya dan distore ke state
// cara ini disebut control form, karena si value nya bener2 bergantung pada state

import React, { useState } from 'react'

const Latihan3Form = () => {
	// disini kita gunakan empty string karena niatnya mengambil value dari input, input kan awalnya kosong
	// jadi kita kasih string kosong
	const [nama, setNama] = useState('jufri')


	function handleSubmit(e) {
		e.preventDefault()
		console.log('Mama, aku disubmit', nama)
	}

	function handleChange(e){
		setNama(e.target.value)
		// console.log('handleChange')
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Nama: </label>
					<input type="text" name='nama' value={nama} onChange={handleChange} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default Latihan3Form
