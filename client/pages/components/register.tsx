import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import styles from "../../styles/Login.module.css";


export default function Register() {
	const router = useRouter();
	const form = useForm();

	const onSubmitForm = async (data) => {
		const res = await axios.post('http://localhost:3002/users/', data);
		router.push('/admin');
	}

	return (
		<div id="register" className={styles.LoginContainer}>
			<h1>Cadastro</h1>

			<form>
				{!!Object.keys(form.errors || {}).length && (
					<p style={{ color: 'black', fontWeight: 'bold' }}>Preencha todos os campos</p>
				)}

				<div className={styles.inputBlock}>
					<label htmlFor="email">Digite seu nome:</label>
					<input type="email" name="name" placeholder="Pedro" ref={form.register({ required: true })} />
				</div>

				<div className={styles.inputBlock}>
					<label htmlFor="email">Digite seu email:</label>
					<input type="email" name="email" placeholder="email@dominio.com" ref={form.register({ required: true })} />
				</div>

				<div className={styles.inputBlock}>
					<label htmlFor="email">Nome do seu negócio:</label>
					<input type="email" name="companyName" placeholder="Meu comércio" ref={form.register({ required: true })} />
				</div>

				<div className={styles.inputBlock}>
					<label htmlFor="email">Descrição do seu negócio:</label>
					<input type="email" name="companyDescription" placeholder="Somos uma loja que vende de tudo" ref={form.register({ required: true })} />
				</div>

				<p style={{ textAlign: 'center', marginTop: 16 }}>
					<Button variant='dark' size='lg' onClick={form.handleSubmit(onSubmitForm)}>Cadastrar</Button>
				</p>
			</form>
		</div>
	);
}
