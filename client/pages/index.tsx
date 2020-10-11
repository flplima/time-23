import Link from 'next/link'
import styles from "../styles/Home.module.css";

import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import Landing from "./components/landing";
import About from "./components/about";
import Benefits from "./components/benefits";
import ContactUs from "./components/contactUs";

export default function Home({ stars }) {
	return (
		<div className={styles.container}>
			<title>Getúlia</title>
			<Header />
			<Landing />
			<About />
			<Benefits />
			<ContactUs />

			<Login />
			<Register />
		</div>
	);
}