import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductActions from '../actions/ProductActions';
import Header from '../includes/header';
import AddProductForm from '../includes/productForm';

class AddNewProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.saveProduct = this.saveProduct.bind(this);
	}

	saveProduct(product) {
		ProductActions.addProduct(product);
		this.props.history.push('/viewProducts');
		alert('Product Added Successfully!');
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Header />
				<Container>
					<Row>
						<Col></Col>
						<Col xs={5}>
							<Card
								className='text-center mt-5'
								style={{
									backgroundColor: '#feffff',
									boxShadow:
										'0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
									border: 'none',
								}}
							>
								<Card.Body>
									<Card.Title
										style={{
											fontFamily: 'sans-serif',
											fontSize: '24px',
											fontWeight: 'bolder',
										}}
									>
										Add New Product
									</Card.Title>
									<Card.Text>
										<AddProductForm onSave={this.saveProduct} />
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col></Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default AddNewProductPage;
