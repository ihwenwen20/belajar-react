import React from 'react'

const Latihan2ListRendering = () => {
	// untuk membuat list kita buat dulu array nya, lalu kita foreach dengan map.
	// Ingat foreach pada jsx tidak mereturn apa2. Dan jangan lupa
	// kita return agar perulangan nya dapat berjalan normal, dan
	// kita panggil data array nya pada parameter
	const fruits = ['apple', 'jeruk', 'anggur', 'nanas']

	console.log(fruits.map(function (fruit) {
		return <li>{fruit}</li>
	}))

	// akan menghasilkan juga warning Warning: Each child in a list should have a unique "key" prop.
	// karena kita harus memberikan keys unique

	return (
		<div>
			<h1>List Buah-buahan</h1>
			<p>Contoh tanpa parameter</p>
			<ul>
				{fruits.map(function () {
					return <li>Apple</li>
				})}
			</ul>
			<p>Contoh dengan parameter tanpa keys</p>
			<ul>
				{fruits.map(function (fruit) {
					return <li>{fruit}</li>
				})}
				{/* // function darin map akan selalu menghasilkan, warning Warning: Each child in a list should have a unique "key" prop.
	// karena kita harus memberikan keys */}
			</ul>
			<p>Contoh dengan parameter serta keys</p>
			<ul>
				{fruits.map(function (fruit) {
					return <li key={fruit}>{fruit}</li>
					// didalam kasus nyata pada data dari database biasanya key nya adalah id karena harus unique
				})}
				{/* // akan menghasilkan juga warning Warning: Each child in a list should have a unique "key" prop.
	// karena kita harus memberikan keys */}
			</ul>
		</div>
	)
}

export default Latihan2ListRendering;
