import Link from "next/link";
import styles from "../../styles/Login.module.css";

export default function Login() {
	return (
		<div id="login" className={styles.LoginContainer}>
			<h1>Fazer Login</h1>

			<div className={styles.inputBlock}>
			<label htmlFor="email">Digite seu email:</label>
				<input type="email" name="email" placeholder="email@dominio.com" />
			</div>

			<div className={styles.inputBlock}>
				<label htmlFor="password">Digite sua senha:</label>
				<input type="password" name="password" placeholder="senha" />
			</div>

			<Link href="/">Entrar</Link>
			<span>
				Não possui uma conta?
				<Link href="#register">Faça seu cadastro</Link>
			</span>
		</div>
	);
}
