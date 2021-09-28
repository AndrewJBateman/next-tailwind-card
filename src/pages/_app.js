import "tailwindcss/tailwind.css";
import { NotesProvider } from "../context/NotesContext";

function MyApp({ Component, pageProps }) {
	return (
		<NotesProvider>
			<Component {...pageProps} />
		</NotesProvider>
	);
}

export default MyApp;
