import Link from 'next/link'
import styles from "../styles/Home.module.css";

import Header from "./components/header";

export default function AdminPage({ stars }) {
	return (
		<div className={styles.container}>
			<title>Getúlia</title>
			<Header />
			<p>produtos</p>
			<p>pedidos aqui</p>
		</div>
	);
}