import Link from "next/link";
import styles from "../../styles/Login.module.css";

export default function Login() {
	return (
		<div id="register" className={styles.LoginContainer}>
			<h1>Cadastro</h1>

			<div className={styles.inputBlock}>
			<label htmlFor="email">Digite seu nome:</label>
				<input type="email" name="name" placeholder="Pedro" />
			</div>

			<div className={styles.inputBlock}>
			<label htmlFor="email">Digite seu email:</label>
				<input type="email" name="email" placeholder="email@dominio.com" />
			</div>

			<div className={styles.inputBlock}>
				<label htmlFor="password">Digite sua senha:</label>
				<input type="password" name="password" placeholder="senha" />
			</div>

			<div className={styles.inputBlock}>
				<label htmlFor="password">Digite sua senha novamente:</label>
				<input type="password" name="password" placeholder="senha" />
			</div>

			<Link href="/">Cadastrar</Link>
			<span>
				Já possui uma conta?
				<Link href="#login">Faça seu Login</Link>
			</span>
		</div>
	);
}
