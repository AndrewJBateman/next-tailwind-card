import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNotes } from "../context/NotesContext";
import { useRouter } from "next/router";

const initialState = {
	title: "",
	description: "",
};

const NoteFormPage = () => {
	const [note, setNote] = useState(initialState);
	const { createNote, updateNote, notes } = useNotes();
	const router = useRouter();

	const handleChange = (e) =>
		setNote({ ...note, [e.target.name]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!router.query.id) {
			createNote(note.title, note.description);
			// setNote(inititalState);
		} else {
			updateNote(router.query.id, note);
		}

		router.push("/");
	};

	useEffect(() => {
		if (router.query.id) {
			const noteFound = notes.find((note) => note.id === router.query.id);
			if (noteFound)
				setNote({ title: noteFound.title, description: noteFound.description });
		}
	}, [router.query.id]);

	return (
		<Layout>
			<div className="flex items-center justify-center h-full">
				<form className="p-10 bg-gray-700 h-2/4" onSubmit={handleSubmit}>
					<h1 className="text-3xl mb-7">
						{router.query.id ? "Edit Note" : "New Note"}
					</h1>
					<input
						type="text"
						className="w-full px-4 py-3 mb-5 bg-gray-800 focus:text-gray-100 focus:outline-none"
						placeholder="Write a title"
						autoFocus
						name="title"
						onChange={handleChange}
						value={note.title}
					/>
					<textarea
						cols="2"
						placeholder="Write a Description"
						className="w-full px-4 py-3 mb-5 bg-gray-800 focus:text-gray-100 focus:outline-none"
						name="description"
						onChange={handleChange}
						value={note.description}
					></textarea>

					<button
						className="px-4 py-2 bg-green-500 rounded-sm hover:bg-green-400 disabled:opacity-30"
						disabled={!note.title}
					>
						Save
					</button>
				</form>
			</div>
		</Layout>
	);
};

export default NoteFormPage;
