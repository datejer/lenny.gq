import Head from "next/head";
import styles from "../styles/Home.module.css";
import Div100vh from "react-div-100vh";
import { Tooltip } from "react-tippy";
import { useState } from "react";

export default function Home() {
	const [checkmark, setCheckmark] = useState(false);

	const copy = () => {
		navigator.clipboard.writeText("( ͡° ͜ʖ ͡°)");
		setCheckmark(true);
	};

	if (checkmark) {
		setTimeout(() => setCheckmark(false), 3000);
	}

	return (
		<Div100vh>
			<div className={styles.container}>
				<Head>
					<title>( ͡° ͜ʖ ͡°)</title>
					<link rel="icon" href="/favicon.png" />
				</Head>
				{checkmark ? (
					<div className={styles.checkmarkWrapper}>
						<svg
							className={styles.checkmark}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 52 52"
						>
							<circle
								className={styles.checkmark__circle}
								cx="26"
								cy="26"
								r="25"
								fill="none"
							/>
							<path
								className={styles.checkmark__check}
								fill="none"
								d="M14.1 27.2l7.1 7.2 16.7-16.8"
							/>
						</svg>
					</div>
				) : (
					""
				)}
				<Tooltip title="Click to copy" arrow="true">
					<h1 className={styles.lenny} onClick={copy}>
						( ͡° ͜ʖ ͡°)
					</h1>
				</Tooltip>
			</div>
		</Div100vh>
	);
}
