// Inline Conditional Rendering Di dalam JSX..
// const [Login, setLogin] = useState(false)
// return {
// <h1>Aplication</h1>
// <p>{Login ? <b>Saya Sudah Login, Bang<b> : <i>maaf Bang saya belum login<i>}</p>
// Atau
// <p>{Login ? <b>Saya Sudah Login, Bang<b> : ''}</p>
// Namun, daripada mubazir memberikan empty string. Lebih baik seperti dibawah..
// <p>{Login && <b>Saya belum Login, Bang<b>}</p>
// Atau bisa dibaca
// <p>{Login === false && <b>Maaf, Saya belum Login, Bang<b>}</p>
// <p>{Login === true && <b>Saya sudah Login, Bang<b>}</p>
// <button onCLick={function () {
// setLogin(true)
// }}>
// Login
// </button>
// }

// keluaran atau output dari react saat kita menggunakan Hooks, default nya adalah array yang di dalamnya adalah element Object. INGAT!
// useState vs useRef => useState selalu ngerirender ulang saat ke triger, sedangkan useRef tidak.
// useRef diperlukan untuk memanipulasi DOM. Lebih advance lagi ada useCallback dll.
// useState, useEffet, useRef keriga hal tersebut disebut Lifecycle React Hooks, atau pendeknya disebut HOOKS.
// pada useEffect, jika kita tidak menambahkan [] pada parameter keduanya, maka akan merirender setiap kali useEffect dipanggil.
// Sedangkan jika kita tambahkan [] pada parameter keduanya, maka akan dirender satu kali saja saat pertama kali dimuat.
// Dan jika [isi nama state nya], maka useEffect akan merirender saat state yg di panggil pada useEffect nya terjadi perubahan. Atau saat onmounted.
