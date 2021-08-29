import { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<>
		<Head>
			<title>Amazon Location Service</title>
		</Head>
		<Component {...pageProps} />
	</>
);

export default App;
