import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { withRouter } from 'react-router-dom';
import ProductApi from '../data/ProductApi';

class CardsDetails extends React.Component {
	render() {
		if (this.props.product.productName !== undefined) {
			ProductApi.addProductView(this.props.product.productName);
		}
		return (
			<div
				style={{
					height: '100vh',
					display: 'flex',
					marginLeft: '30vw',
					marginTop: '15vh',
				}}
			>
				<img
					src={`https://picsum.photos/seed/${this.props.match.params.id}/478/185`}
					alt='product'
					style={{ maxWidth: '20vw', maxHeight: '50vh' }}
				/>
				<Card
					style={{
						backgroundColor: '#feffff',
						boxShadow:
							'0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
						border: 'none',
						maxWidth: '30vw',
						maxHeight: '50vh',
					}}
				>
					<Card.Body style={{ textAlign: 'left' }}>
						<Card.Title>
							<u>{this.props.product.productName}</u>
						</Card.Title>
						<Card.Text>
							<b>Know More About this Product:</b> <br />
							{this.props.product.productDescription}
						</Card.Text>
					</Card.Body>
					<ListGroup className='list-group-flush' style={{ textAlign: 'left' }}>
						<ListGroupItem>
							<b>Manufacturer: </b>
							{this.props.product.manufacturer}
						</ListGroupItem>
						<ListGroupItem>
							<b>Price: </b>
							{this.props.product.price} INR
						</ListGroupItem>
						<ListGroupItem>
							<b>Quantity: </b>
							{this.props.product.quantity}
						</ListGroupItem>
					</ListGroup>
					<Card.Body>
						<Card.Link href={`/editProduct/${this.props.match.params.id}`}>
							Edit
						</Card.Link>
						<Card.Link
							href='#'
							style={{ color: 'red' }}
							onClick={() => {
								alert('Are you sure to delete?');
								ProductApi.deleteProduct(this.props.match.params.id, () => {
									this.props.history.push('/viewProducts');
								});
							}}
						>
							Delete
						</Card.Link>
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default withRouter(CardsDetails);
