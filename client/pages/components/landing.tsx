import Link from "next/link";
import styles from "../../styles/Landing.module.css";

export default function landing() {
	return (
		<div id="home" className={styles.LandingContainer} >

			<div>
				<h1>O atendimento de pedidos via WhatsApp está te tomando muito tempo?</h1>
				<p>
					Apresentamos a você a Getúlia: <br />
					Uma atendente virtual personalizada para o seu negócio.
				</p>
				<Link href="#register">Cadastre-se agora</Link>
			</div>

			<img src="/print.png" alt="print do whatsapp" />

		</div>
	);
}