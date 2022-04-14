import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router-dom';
import ProductActions from '../actions/ProductActions';
import ProductApi from '../data/ProductApi';
import EditProductForm from '../includes/editProductForm';
import Header from '../includes/header';

class EditProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.updateProduct = this.updateProduct.bind(this);
		this.state = {
			product: undefined,
		};
	}

	componentDidMount() {
		const productId = this.props.match.params.id;
		ProductApi.getProductById(productId, (product) => {
			this.setState({ product });
			console.log(product);
		});
	}

	updateProduct(product) {
		ProductActions.updateProductMethod(product);
		alert('Product Updated Successfully!');
		this.props.history.push('/viewProducts');
		window.location.reload();
	}
	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Header />
				<Container>
					<Row>
						<Col></Col>
						<Col xs={5}>
							<Card className='text-center mt-5'>
								<Card.Body>
									<Card.Title>Edit Product</Card.Title>
									<Card.Text>
										<EditProductForm
											onUpdate={this.updateProduct}
											product={this.state.product}
										/>
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

export default withRouter(EditProductPage);
