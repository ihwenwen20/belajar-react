//!  1. buat komponen memiliki hasil penambahan masing-masing.
//!  2. buat & gunakan Higher Order Component (HOC).
// HOC adalah implementasi logic yang sama untuk banyak components.
// Ciri2 HOC: melempar components yg ada, lalu di modif di tempat tujuan parents nya.
// Balik2 components nya memiliki nilai yang berbeda dan dapat memiliki logic yg berbeda juga.
// jadi High Order Component itu parameter yang diterima oleh component itu berupa component lagi. biasanya kan kalau component itu parameternya itu mengirimkan props, nah pada HOC ini dia mengirimkan component langsung sebagai parameternya. 
//!  3. buat & gunakan Higher Order Function (HOF).
import { useState } from "react";
import { Link } from "react-router-dom";

const SoalDea = () => {
	const [nomor, setNomor] = useState(0);

	const handlerNomor = () => {
		setNomor(nomor + 1);
	};

	return (
		<>
			<h1>Soal Dea Afrizal</h1>
				<ol>
					<li>buat komponen memiliki hasil penambahan masing-masing.</li>
					<li>buat & gunakan Higher Order Component (HOC).</li>
					<li>buat & gunakan Higher Order Function (HOF)</li>
				</ol>
			<div>
				<h3>x + 1</h3>
				<p>Hasil: {nomor}</p>
				<button onClick={handlerNomor}>tambah</button>
			</div>
			<hr />
			<div>
				<h3>x + 2</h3>
				<p>Hasil: {nomor}</p>
				<button onClick={handlerNomor}>tambah</button>
			</div>
			<hr />
			<Link to="/jawaban">Jawaban nya adalah ...</Link>
		</>
	);
}

export default SoalDea;