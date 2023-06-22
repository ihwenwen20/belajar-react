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

// keluaran dari react saat kita menggunakan Hooks, default nya adalah array yang di dalamnya element Object. INGAT!
// useState vs useRef +> useState selalu ngerirender ulang saat ke triger, sedangkan useRef tidak.
// useRefc diperlukan untuk memanipulasi DOM. Lebih advance lagi ada useCallback dll.
// useState. useEffet, useRef keriga hal tersebut disebut Lifecycle React Hooks, atau pendeknya disebut HOOKS.