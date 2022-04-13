import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Table from 'react-bootstrap/Table';
import Tooltip from 'react-bootstrap/Tooltip';
import Products from '../components/Products';
import ProductApi from '../data/ProductApi';
import UserStore from '../stores/UserStore';

export default class CardsView extends React.Component {
	state = {
		query: '',
		checkedProducts: {},
		columns: {
			productName: true,
			manufacturer: true,
			price: true,
			quantity: true,
			checkToSelect: true,
		},
	};

	onChangeHandler = (e) => {
		const query = e.target.value;
		this.setState({ query });
	};

	handleCheck = (productId, checked) => {
		this.setState((prevState) => {
			const checkedProducts = prevState.checkedProducts;
			checkedProducts[productId] = checked;
			return { checkedProducts };
		});
	};

	onDelete = () => {
		const checkedArray = Object.keys(this.state.checkedProducts).filter(
			(id) => this.state.checkedProducts[id] === true
		);
		ProductApi.deleteProducts(checkedArray);
		window.location.reload();
	};

	render() {
		const currentUser = UserStore.getCurrentUser();
		const products = this.props.products;
		const query = this.state.query;
		const optionsList = [
			{
				name: 'Product Name',
				id: 'productName',
			},
			{
				name: 'Manufacturer',
				id: 'manufacturer',
			},
			{
				name: 'Price',
				id: 'price',
			},
			{
				name: 'Quantity',
				id: 'quantity',
			},
		];
		const filteredProducts = products.filter((product) => {
			return (
				product.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1
			);
		});
		return (
			<Container
				style={{ display: 'flex', flexDirection: 'column', marginTop: '40px' }}
			>
				<Form>
					<Form.Row>
						<Form.Group
							controlId='formGridEmail'
							style={{ width: '40%', marginInline: 'auto' }}
						>
							<Form.Control
								type='text'
								placeholder='Search Product'
								onChange={this.onChangeHandler}
							/>
						</Form.Group>
					</Form.Row>
				</Form>
				<Card
					style={{
						marginBottom: '10px',
						backgroundColor: '#feffff',
						paddingBottom: '0',
						boxShadow:
							'0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
						border: 'none',
					}}
				>
					<Card.Body
						style={{ display: 'flex', justifyContent: 'space-between' }}
					>
						{optionsList.map(({ name, id }) => (
							<>
								<p>{name}</p>
								<Form.Check
									defaultChecked={true}
									onChange={(evt) => {
										const checked = evt.target.checked;
										this.setState((prevState) => {
											const tempObj = {};
											tempObj[id] = checked;
											return {
												columns: {
													...prevState.columns,
													...tempObj,
												},
											};
										});
									}}
								/>
							</>
						))}
					</Card.Body>
				</Card>

				<Table
					striped
					style={{
						backgroundColor: '#feffff',
						boxShadow:
							'0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
						border: 'none',
					}}
				>
					<thead>
						<tr>
							{this.state.columns.productName ? <th>Product Name</th> : null}
							{this.state.columns.manufacturer ? <th>Manufacturer</th> : null}
							{this.state.columns.price ? <th>Price</th> : null}
							{this.state.columns.quantity ? <th>Quantity</th> : null}
							{this.state.columns.checkToSelect ? (
								<th>Check to Select</th>
							) : null}
						</tr>
					</thead>
					{filteredProducts.map((product) => (
						<Products
							productId={product.id}
							productName={product.productName}
							productDescription={product.productDescription}
							manufacturer={product.manufacturer}
							price={product.price}
							quantity={product.quantity}
							onCheck={this.handleCheck}
							columns={this.state.columns}
						/>
					))}
				</Table>
				<Container>
					{currentUser ? (
						<>
							<Button
								variant='outline-success'
								href='/addNewProduct'
								style={{ marginRight: '15px' }}
							>
								Add New Product
							</Button>
							<OverlayTrigger
								overlay={
									<Tooltip id='tooltip-disabled'>Delete Product</Tooltip>
								}
							>
								<span className='d-inline-block'>
									<Button variant='outline-danger' onClick={this.onDelete}>
										Delete Selected Products
									</Button>
								</span>
							</OverlayTrigger>
						</>
					) : (
						<OverlayTrigger
							overlay={
								<Tooltip id='tooltip-disabled'>
									Sign In to perform this action!
								</Tooltip>
							}
						>
							<span className='d-inline-block'>
								<Button
									variant='outline-danger'
									disabled
									style={{ pointerEvents: 'none' }}
								>
									Delete Selected Products
								</Button>
							</span>
						</OverlayTrigger>
					)}
				</Container>
			</Container>
		);
	}
}
