import { useState } from "react";

const Latihan5TodoList = () => {
	const [activity, setActivity] = useState('')
	// Untuk fungsi edit, kita harus  membuat state lagi,
	// karena kita akan mengedit id dan activity nya juga bukan cuman id,
	// makannya pada jsx kita bind nya state todo, bukan hanya todo.id
	//  dan juga saat edit, datanya biasanya object, jadi kita perlu define state nya object juga
	const [edit, setEdit] = useState({})

	const [todos, setTodo] = useState([])
	const [msg, setMsg] = useState('')

	function handleSubmit(e) {
		e.preventDefault()
		// console.log('Mama, aku disubmit', activity)
		if (!activity) {
			return setMsg('Todo tolong di isi')
		}
		setMsg('')

		// untuk handle edit kita cek dulu lagi mode edit apa bukan,
		// lalu buat fungsi edit nya, dengan membuat object baru
		if (edit.id) {
			const updateTodo = {
				// cara 1 sebelum di persingkat
				// id: edit.id,
			// cara 2 lebih better di persingkat dengan spread operator
			...edit,
				activity
			}
			// console.log('simpan perubahan')
			// console.log(updateTodo)
			// return;

			// Setelah membuat object baru, kita cari data nya ada pada index data kita atau tidak
			const findTodoIndex = todos.findIndex(function (todo) {
				return todo.id === edit.id
			})
			// console.log(findTodoIndex)

			// setelah index ditemukan, kita clone posisi yang sedang di find index tadi,
			// dan untuk isi nya kita ambil semua data didalam array todos ke dalam array yg baru
			// kalo kita tidak clone dulu, maka data nya akan langsung tertimpa semua nya,
			// sedangkan ekpektasi kita harusnya activity dari edit.id saja yg tertimpa, makannya kita perlu clone dulu karena dia immutable.
			const updatedTodos = [
				...todos
			]
			// ini contoh cara yg salah karena akan menimpa semua datanya dengan todos[findTodoIndex] = updatedTodos;
			console.log(updatedTodos[findTodoIndex])
			updatedTodos[findTodoIndex] = updateTodo;
			// setTodo(updatedTodos);
			// return

			// nah biar clear tinggal kita return setTodo nya
			setTodo(updatedTodos);

			// jangan lupa setelah handleCancel, kita ubah return nya untuk menyimpan data nya
			// agar saat mode edit terus kita tes hapus, inputan nya di reset ke mode tambah
			return handleCancelModeEdit();
		}

		// cara 1
		// setTodo([activity])
		// console.log(todos)

		// Karena ini data array, dan kita pake state. maka, saat kita menambahkan data baru
		// data nya akan tertimpa terus, normalnya agar data yang sudah ada tidak tertimpa. Maka,
		// kita lakukan merge dgn spread operator
		// cara 2
		// setTodo([... todos, activity])

		// jangan lupa kita reset lagi inputnya
		// setActivity('')

		// nah, selanjutnya untuk kita menghapus atau edit, maka dibutuhkan unique keys,
		// karena kita tidak terhubung ke db, sehingga kita bisa buat sendiri unique keys nya dengan Date.now()
		// sehingga activity atau parameter kedua nya menjadi object multidimensi,
		// lalu jangan lupa juga pada pemanggilan jsx nya kita tambahkan todo.activity

		// cara 3
		setTodo([...todos, {
			id: generateID(),
			activity: activity,
			done: false
		}])

		// jangan lupa kita reset lagi inputnya
		setActivity('')

	}

	function handleChange(e) {
		setActivity(e.target.value)
		// console.log('handleChange')
	}

	function generateID() {
		return Date.now()
	}

	function handleDelete(todoId) {
		// console.log(todoId)
		// sebelum menghapus kita filter dulu data nya dapat atau tidak,
		// fungsi filter ini akan memproduksi array baru dengan element yg udah di filter
		const filteredTodos = todos.filter(function (todo) {
			// console.log(todoId, todo.id)
			return todo.id !== todoId
		})

		// console.log(filteredTodos)
		setTodo(filteredTodos)
		if(edit.id) handleCancelModeEdit();
	}

	function handleEdit(todo) {
		console.log('Edit')
		setActivity(todo.activity)
		setEdit(todo)
	}

	function handleCancelModeEdit() {
		setEdit({})
		setActivity('')
	}

	function handlerTodoDone(todo) {
		const updateTodo = {
			// cara 1 sebelum di persingkat
			// id: todo.id,
			// activity: todo.activity,

			// cara 2 lebih better di persingkat dengan spread operator
			...todo,
			done: todo.done ? false : true
		}
		const findTodoIndex = todos.findIndex(function (currentTodo) {
			return currentTodo.id === todo.id
		})
		// console.log(findTodoIndex)
		// setelah index ditemukan, kita clone posisi yang sedang di find index tadi,
		// dan untuk isi nya kita ambil semua data didalam array todos ke dalam array yg baru
		// kalo kita tidak clone dulu, maka data nya akan langsung tertimpa semua nya,
		// sedangkan ekpektasi kita harusnya activity dari edit.id saja yg tertimpa, makannya kita perlu clone dulu karena dia immutable.
		const updatedTodos = [
			...todos
		]
		// ini contoh cara yg salah karena akan menimpa semua datanya dengan todos[findTodoIndex] = updatedTodos;
		// console.log(updatedTodos[findTodoIndex])
		updatedTodos[findTodoIndex] = updateTodo;
		// setTodo(updatedTodos);
		// return

		// nah biar clear tinggal kita return setTodo nya
		// console.log(updatedTodos)
		setTodo(updatedTodos);
	}

	return (
		<>
			<h1>Simple Todo List</h1>
			{msg && <div style={{ color: 'red' }}>{msg}</div>}
			<form onSubmit={handleSubmit}>
				<input type="text" value={activity} onChange={handleChange} placeholder="Activity Name" />
				<button type="submit">
					{edit.id ? 'Save Changes' : 'Submit'}
				</button>
				{edit.id && <button onClick={handleCancelModeEdit}>Cancel</button>}

			</form>
			{todos.length > 0 ? (
				<ul>
					{todos.map(function (todo) {
						// console.log(todo)
						// return <li key={todo}>{todo}</li>

						// Setelah kita tambahkan unique keys, maka akan seperti ini
						return (
							<li key={todo.id}>
								<input type="checkbox" checked={todo.done} onChange={handlerTodoDone.bind(this, todo)}/>
								{todo.activity}
								({todo.done ? 'Selesai' : 'Belum Selesai'})
								<button onClick={handleEdit.bind(this, todo)}>
									Edit
								</button>
								<button onClick={handleDelete.bind(this, todo.id)}>
									Delete
								</button>
							</li>)
					})}
				</ul>
			) : (
				<p><i>Tidak ada Todo</i></p>

			)}

		</>
	)
}

export default Latihan5TodoList;