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
						<section clasName="container p-10 mx-auto duration-500 transform md:p-20">
							<article className="flex flex-wrap max-w-xl mx-auto shadow-lg md:flex-nowrap ">
								<img
									className="w-full h-auto md:w-40"
									src="https://weandthecolor.com/wp-content/uploads/2012/03/A-Way-Out-Illustration-by-Matheus-Lopes-4563464.jpg"
									alt=""
								/>
								<div className="p-10 my-auto">
									<h1 className="text-2xl font-semibold text-gray-800">
										No notes
									</h1>
									<p className="mt-2 text-base text-gray-400">
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
									<section className="container p-4 mx-auto duration-500 transform md:p-4">
										<div>
											<h1 className="text-2xl font-semibold text-gray-800">
												{note.title}
											</h1>
											<p className="mt-2 text-base text-gray-400">
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
									</section>
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
