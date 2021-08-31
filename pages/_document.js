import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="description"
						content="Build a Next.js PWA with 100% lighthouse score"
					></meta>
					<meta name="theme-color" content="#0D47A1" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/apple-icon.png"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
