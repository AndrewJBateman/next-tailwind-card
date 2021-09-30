import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { VscTrash, VscTasklist } from "react-icons/vsc";

import { useNotes } from "../context/NotesContext";
import Layout from "../components/Layout";

const Home = () => {
	const { notes, deleteNote } = useNotes();
	const router = useRouter();

	return (
		<>
			<Head>
				<title>Note Cards</title>
			</Head>
			<Layout>
				<div>
					{notes.length === 0 ? (
						<section class="container mx-auto p-10 md:p-20 transform duration-500">
							<article class="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-xl ">
								<img
									class="w-full md:w-40 h-auto"
									src="https://weandthecolor.com/wp-content/uploads/2012/03/A-Way-Out-Illustration-by-Matheus-Lopes-4563464.jpg"
									alt=""
								/>
								<div class="p-10 my-auto">
									<h1 class="text-2xl font-semibold text-gray-800">No notes</h1>
									<p class="text-base text-gray-400 mt-2">
										Click '+' to add a note
									</p>
								</div>
							</article>
						</section>
					) : (
						<div className="grid grid-cols-1 gap-6 p-10 sm:grid-cols-2 md:grid-cols-4">
							{notes.map((note) => (
								<div
									key={note.id}
									className="text-white bg-white rounded-lg shadow-md h-50 w-50"
									onClick={() => router.push("/edit/" + note.id)}
								>
									<section class="container mx-auto p-4 md:p-4 transform duration-500">
										{/* <article> */}
										<div>
											<h1 class="text-2xl font-semibold text-gray-800">
												{note.title}
											</h1>
											<p class="text-base text-gray-400 mt-2">
												{note.description}
											</p>
											<button
												className="px-2 py-1 mt-2 bg-red-700 hover:bg-red-600"
												onClick={(e) => {
													e.stopPropagation();
													deleteNote(note.id);
												}}
											>
												<VscTrash />
											</button>
										</div>
										{/* </article> */}
									</section>

									{/* <span className="mr-5 text-5xl">{i}</span>
									<div>
										<div className="flex justify-between">
											<h1 className="font-bold">{note.title}</h1>
											<button
												className="inline-flex items-center px-3 py-1 bg-red-700 hover:bg-red-600"
												onClick={(e) => {
													e.stopPropagation();
													deleteNote(note.id);
												}}
											>
												<VscTrash className="mr-2" /> Delete
											</button>
										</div>
										<p className="text-gray-300">{note.description}</p>
										<span className="text-gray-400">{note.id}</span>
									</div> */}
								</div>
							))}
						</div>
					)}
				</div>
			</Layout>
		</>
	);
};

export default Home;
