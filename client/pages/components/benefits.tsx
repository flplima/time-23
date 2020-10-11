import styles from "../../styles/Benefits.module.css";

export default function landing() {
	return (
		<div id="benefits" className={styles.BenefitsContainer} >
			<h1>
				Porque adquirir nosso produto?<br/>
				Veja alguns dos benefícios oferecidos:
			</h1>

			<p>- Oferecemos gráficos e relatórios de vendas, conforme o período desejado pelo usuário;</p>
			<p>- Para a empresa, economia de gastos com colaboradores que, seriam encarregados para cumprirem essa função;</p>
			<p>- Os pedidos serem entregues no conforto de seu domicílio, sem precisar sair de casa;</p>
		</div>
	);
}