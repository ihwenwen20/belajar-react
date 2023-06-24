import NavbarLink from './NavbarLink'
import NavbarUser from './NavbarUser'

export default function Navbar() {
	// console.log(props)
	return (
		<nav>
			<NavbarLink>Dashboard</NavbarLink> |
			<NavbarLink>Product</NavbarLink> | {''}
			<NavbarLink>
				<NavbarUser />
			</NavbarLink>
		</nav>
	)
}

// di react ini dinamakan PROPS DRILLING,
// yg dimana kita memparsing data secara turun temurun hingga ke components paling dalam

// Istilah2 pada react context
// Consumer adalah components2 yang ngambil data ke parent nya, contoh ke AppContext..
// Subscribe adalah kegiatan ngambil data nya

// Tabiat atau perilaku si React Context adalah dia gak bisa bedain, data mana aja yg berubah
// Jadi ketika kita nge set state,
// dia gak bisa nge merge,
// malah ngehapus dan ngeganti keseluruhan data state sebelumnya dengan data state yg baru/
// cara penyelesaian nya adalah,
// 1. dengan split data nya menjadi beberapa context,
// 2. dengan usememo,
// 3. dengan library lain seperti jotai, zustand,redux-toolkit dll
