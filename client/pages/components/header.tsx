import Link from "next/link";
import styles from "../../styles/Header.module.css";

export default function header() {
	return (
		<header className={styles.HeaderContainer} >
			<Link href="/" >GETÚLIA</Link>

			<nav className={styles.nav} >
				<Link href="#home" > Início </Link>
				<Link href="#about" > Sobre </Link>
				<Link href="#benefits" > Benefícios </Link>
				<Link href="#contact-us" > Fale Conosco </Link>
				<Link href="/admin" > Portal do Cliente </Link>
			</nav>
		</header>
	);
}