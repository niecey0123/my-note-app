//componenets/AddNote.js

import React from "react";


const AddNote = ({ title, setTitle, content, setContent, onAddNote }) => {
	return (
		<div>
			<h2 className="add-note">Add Note</h2>
			<input
				type="text"
				placeholder="Title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Content"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			></textarea>
			<button className="button1" onClick={onAddNote}>
				Submit
			</button>
           
		</div>
	);
};

export default AddNote;
