import React, {useState} from "react";

const AddNewListForm = () => {
    const [textInput, setTextInput] = useState('')
	const onSubmitForm = (e) => {
		e.preventDefault();
		// TODO: POSTING DATA
	};
	const handleInputChange = (e) => {
        console.log(e.target.value)
		setTextInput(e.target.value)
    };
    
    const resetForm = (e) => {
        e.preventDefault()
        setTextInput('')
    }
	return (
		<form onSubmit={onSubmitForm}>
			<input type="text" value={textInput} onChange={handleInputChange} />
			<button type="submit"> Add</button>
			<button type="reset" onClick={resetForm}> Cancel</button>
		</form>
	);
};

export default AddNewListForm;
