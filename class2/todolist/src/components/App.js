import React, { useEffect, useState } from "react";
import AddNewListForm from "./AddNewListForm";
import ListDisplay from "./ListDisplay";

const App = () => {
	const [todoList, setTodoList] = useState({});

	useEffect(() => {
		const host = "http://localhost:5000";
		fetch(`${host}/todolist`)
			.then((res) => res.json())
			.then((data) => {
				setTodoList(data)
			});
	}, []);

	return (
		<div>
			<div>This is todo App</div>
			<ListDisplay todoList={todoList} />
			<AddNewListForm />
		</div>
	);
};

export default App;
