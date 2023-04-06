import './styles/App.scss'
import 'antd/dist/reset.css'
import Header from './components/Header'
import AddTodoForm from './components/AddTodoForm'
import { useEffect, useState } from 'react'
import Main from './components/Main'
import { uid } from 'uid'

function App() {
	const [addTodo, setAddTodo] = useState(false)
	const [todoList, setTodoList] = useState([
		{
			title: 'Do homework',
			description: 'Complete all assignments of today',
			due_date: '2023-04-08',
			tag: ['Homework', 'School'],
			status: 'Open',
			key: uid(),
			timestamp: new Date().toUTCString(),
		},
		{
			title: 'Go to gym',
			description: 'Daily workout and exercise',
			due_date: '2023-04-06',
			tag: ['Gym', 'Exercise'],
			status: 'Done',
			key: uid(),
			timestamp: new Date().toUTCString(),
		},
		{
			title: 'Go to tution',
			description: 'Attend maths tution at 6pm.',
			due_date: '2023-04-07',
			tag: ['Tution','Study'],
			status: 'Open',
			key: uid(),
			timestamp: new Date().toUTCString(),
		},
		{
			title: 'Do this project',
			description: 'Make science project',
			due_date: '2023-04-10',
			tag: ['project', 'science','school'],
			status: 'Open',
			key: uid(),
			timestamp: new Date().toUTCString(),
		},
	])

	useEffect(() => {
		console.log(todoList)
	}, [todoList])

	return (
		<div className='App'>
			{addTodo ? (
				<AddTodoForm
					setTodoList={setTodoList}
					todoList={todoList}
					setAddTodo={setAddTodo}
					addTodo={addTodo}
				/>
			) : (
				<></>
			)}
			<Header setAddTodo={setAddTodo} addTodo={addTodo} />
			<Main setTodoList={setTodoList} todoList={todoList} />
		</div>
	)
}

export default App
