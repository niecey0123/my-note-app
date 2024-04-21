// components/NoteList.js

import React from "react";
import CurrentDate from "./CurrentDate";

const NoteList = ({ notes, onEditNote, onDeleteNote }) => {
	return (
		<ul>
			{notes.map((note) => (
				<li key={note._id}>
					<strong>{note.title}</strong>
					<p>{note.content}</p>
					<CurrentDate />
					<button
						className="button2"
						style={{ marginRight: "15px" }}
						onClick={() =>
							onEditNote(
								note._id,
								prompt("Enter updated title:", note.title),
								prompt("Enter updated content:", note.content)
							)
						}
					>
						Edit
					</button>
					<button
						className="button2"
						onClick={() => onDeleteNote(note._id)}
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);

};

export default NoteList;
