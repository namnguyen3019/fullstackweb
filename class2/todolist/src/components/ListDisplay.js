import React from "react";

const ListDisplay = ({ todoList }) => {
	const renderList = Object.keys(todoList).map((value, index) => {
		const todoItems = todoList[value];
		return (
			<div key={value}>
				<h3>{value}</h3>
				<ul>
					{todoItems.map((value) => {
						return <li key={value}>{value}</li>;
					})}
				</ul>
			</div>
		);
	});

	return (
		<div>{renderList}</div>
	);
};

export default ListDisplay;
