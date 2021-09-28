import Link from "next/link";
import { useRouter } from "next/router";
import { useNotes } from "../context/NotesContext";

import { AiOutlinePlus } from "react-icons/ai";

const Layout = ({ children }) => {
	const router = useRouter();
	const { notes } = useNotes();

	return (
		<div className="h-screen text-white bg-gray-900">
			<header className="flex items-center py-5 bg-gray-800 px-28">
				<Link href="/">
					<a>
						<h1 className="text-lg font-black">Notes App</h1>
					</a>
				</Link>

				<span className="ml-2 font-bold text-gray-400">
					{notes.length} notes
				</span>

				<div className="flex-grow text-right">
					<button
						className="inline-flex items-center px-5 py-2 font-bold bg-blue-500 rounded-sm hover:bg-green-400 text-gray"
						onClick={() => router.push("/new")}
					>
						<AiOutlinePlus className="mr-2" />
						Add Note
					</button>
				</div>
			</header>

			<main className="py-10 h-5/6 px-28">{children}</main>
		</div>
	);
};

export default Layout;
