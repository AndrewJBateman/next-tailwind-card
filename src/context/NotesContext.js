import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const NoteContext = createContext();

export const NotesProvider = ({ children }) => {
	const [notes, setNotes] = useState([]);

	// add new note to existing notes spread array
  // use uuid to create a unique id
	const createNote = (title, description) =>
		setNotes([...notes, { id: uuid(), title, description }]);

	// update note using map operator and note id
	const updateNote = (id, updatedNote) =>
		setNotes([
			...notes.map((note) =>
				note.id === id ? { ...note, ...updatedNote } : note
			),
		]);

	// delete note using filter operator and note id
	const deleteNote = (id) =>
		setNotes([...notes.filter((note) => note.id !== id)]);

	return (
		<NoteContext.Provider
			value={{
				notes,
				createNote,
				updateNote,
				deleteNote,
			}}
		>
			{children}
		</NoteContext.Provider>
	);
};

export const useNotes = () => {
	return useContext(NoteContext);
};
