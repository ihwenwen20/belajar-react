import Button from "./Button";

import { Link } from "react-router-dom";

function Jawaban() {
	return (
		<>
			<h1>Soal Dea Afrizal</h1>
			<div>
				<ol>
					<li>buat komponen memiliki hasil penambahan masing-masing.</li>
					<li>buat & gunakan Higher Order Component (HOC).</li>
					<li>buat & gunakan Higher Order Function (HOF)</li>
				</ol>
			</div>
			<hr />
			<div>
				<h2>Jawaban</h2>
				<p>Buatkan components nya dulu, pada contoh kasus diatas adalah button nya bisa dibuat sama. Lalu kita props datanya dari variabel terpisah. Contoh kita buatkan variable counter nya di dalam file Counter.jsx </p>
				<p>Jadi High Order Component itu parameter yang diterima oleh component itu berupa component lagi. biasanya kan kalau component itu parameternya itu mengirimkan props, nah pada HOC ini dia mengirimkan component langsung sebagai parameternya. </p>
				<Button counter={1} />
				<Button counter={2} />
			</div>
			<br />
			 <Link to="/">Back To Soal...</Link>
		</>
	);
}

export default Jawaban;