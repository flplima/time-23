import styles from "../../styles/About.module.css";

export default function landing() {
	return (
		<div id="about" className={styles.AboutContainer}>
			<h1> Sobre o produto: </h1>
			<p>
				Em tempos de pandemia do Covid-19, é fundamental evitar aglomerações no
				cotidiano, para se prevenir desta doença letal. Com isso, afim de
				reduzir os gastos que o estabelecimento terá, lançamos a Getúlia, um
				chatbot responsável pelos pedidos de produtos sem você precisar sair de
				casa. A Getúlia calcula o valor final da compra de forma automática, e
				disponibiliza um link de pagamento online para ser feito. Além disso,
				ela também notifica o comprador das mercadorias que o pedido foi
				confirmado, assim como o pagamento.
			</p>
		</div>
	);
}

