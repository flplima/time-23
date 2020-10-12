import Head from 'next/head';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import useSWR, { mutate } from 'swr';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AdminPage() {
	const { data: products } = useSWR('http://localhost:3002/products');

	const form = useForm();

	const onSubmit = async (data: any) => {
		const synonyms = data.synonyms.split(',').map((item: string) => item.trim());
		console.log({ synonyms });
		await axios.post('http://localhost:3002/products', {
			...data,
			synonyms,
			value: parseFloat(data.value || 0),
		});
		mutate('http://localhost:3002/products');
	}

	return (
		<div style={{ backgroundColor: '#fff' }}>
			<Head>
				<title>Getúlia</title>
			</Head>
			<h2>Produtos</h2>
			<Form>
				<Row>
					<Col>
						<Form.Control placeholder="Nome" name='name' ref={form.register({ required: true })} />
					</Col>
					<Col>
						<Form.Control
							placeholder="Valor"
							type='number'
							name='value'
							ref={form.register}
						/>
					</Col>
					<Col>
						<Button onClick={form.handleSubmit(onSubmit)}>Adicionar</Button>
					</Col>
				</Row>
			</Form>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Valor</th>
					</tr>
				</thead>
				<tbody>
					{products?.map(product => (
						<tr key={product._id}>
							<td>{product.name}</td>
							<td>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
						</tr>
					))}
				</tbody>
			</Table>

			<h2>Pedidos</h2>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<td>3</td>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}