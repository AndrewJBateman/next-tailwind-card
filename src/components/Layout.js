import Link from "next/link";
import { useRouter } from "next/router";
import { useNotes } from "../context/NotesContext";

import { AiOutlinePlusCircle } from "react-icons/ai";

const Layout = ({ children }) => {
	const router = useRouter();
	const { notes } = useNotes();

	return (
		<div className="h-screen bg-gray-50">
			<header className="flex items-center px-16 py-5 bg-gray-100">
				<Link href="/">
					<a>
						<h1 className="text-lg">Notes ({notes.length})</h1>
					</a>
				</Link>
				<div className="flex-grow text-right">
					<button className="p-2 text-white bg-blue-600 rounded-sm hover:bg-blue-800"
						onClick={() => router.push("/create")}
					>
						<AiOutlinePlusCircle />
					</button>
				</div>
			</header>

			<main className="bg-gray-100">{children}</main>
		</div>
	);
};

export default Layout;
