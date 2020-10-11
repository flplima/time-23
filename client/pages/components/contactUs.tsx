import Link from "next/link";
import styles from "../../styles/ContactUs.module.css";

export default function landing() {
	return (
		<div id="contact-us" className={styles.ContactUsContainer} >
			<h1> Fale conosco </h1>

			<span>Clique no link abaixo para falar diretamente com a nossa atendente Getúlia</span>
			<Link href="#contact-us" >Getúlia</Link>
		</div>

	);
}