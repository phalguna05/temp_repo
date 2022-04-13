import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductApi from '../data/ProductApi';
import CardsDetails from '../includes/cardsDetails';
import Header from '../includes/header';
import UserStore from '../stores/UserStore';

class ProductsDetailsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: '',
		};
		if (UserStore.getCurrentUser() == undefined) {
			alert("You're not signed in! Sign in?");
			props.history.push('/signIn');
		}
	}

	componentDidMount() {
		const productId = this.props.match.params.id;
		ProductApi.getProductById(productId, (product) => {
			this.setState({ product });
		});
	}

	render() {
		return (
			<div>
				<Header />
				<CardsDetails product={this.state.product} />
			</div>
		);
	}
}

export default withRouter(ProductsDetailsPage);
