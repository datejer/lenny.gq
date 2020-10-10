import "../styles/globals.css";
import "react-tippy/dist/tippy.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
