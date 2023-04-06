import React from 'react'
import '../styles/App.scss'

const Header = ({ setAddTodo, addTodo }) => {
	const onclick = () => setAddTodo(!addTodo)
	return (
		<div className='header w-full'>
			<div className='logo'>ToDo App</div>
			<button className='btn' onClick={onclick}>
				Add Todo
			</button>
		</div>
	)
}

export default Header
