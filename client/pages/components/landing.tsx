import Link from "next/link";
import styles from "../../styles/Landing.module.css";

export default function landing() {
	return (
		<div id="home" className={styles.LandingContainer} >

			<div>
				<h1>As suas dores de cabeça com vendas online terminaram!</h1>
				<p>
					Apresentamos a você a Getúlia: <br />
					a solução prática que irá otimizar
					seu tempo e economizar os gastos
					financeiros sem a necessidade de
					instalar nenhum aplicativo.
				</p>
				<Link href="#about"> Veja Mais </Link>
			</div>

			<img src="" alt="" />

		</div>
	);
}