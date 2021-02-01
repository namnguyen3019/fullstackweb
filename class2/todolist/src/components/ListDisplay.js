import React from "react";

const ListDisplay = ({ todoList }) => {
	const renderList = (list) => {
		Object.keys(list).map((key, value) => {
			return <div>{key}</div>;
		});
	};

	return <div>
    {renderList({todoList})}
  </div>;
};

export default ListDisplay;
