import styles from "../styles/Home.module.css";

import Header from "./components/header";
import Register from "./components/register";
import Landing from "./components/landing";
import About from "./components/about";
import Benefits from "./components/benefits";
import ContactUs from "./components/contactUs";

export default function Home() {
	return (
		<div className={styles.container}>
			
			<title>Getúlia</title>
			
			<Header />
			<Landing />
			<About />
			<Benefits />
			<ContactUs />

			<Register />
			
		</div>
	);
}