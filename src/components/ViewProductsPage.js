import React from 'react';
import InitializeActions from '../actions/InitializeProductActions';
import CardsView from '../includes/cardsView';
import Header from '../includes/header';
import ProductStore from '../stores/ProductStore';

export default class AllProductsPage extends React.Component {
	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		this.state = {
			products: ProductStore.getAllProducts(),
		};
	}

	componentDidMount() {
		ProductStore.addChangeListener(this._onChange);
		InitializeActions.initProducts();
	}

	componentWillUnmount() {
		ProductStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState({ products: ProductStore.getAllProducts() });
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Header />
				<CardsView products={this.state.products} />
			</div>
		);
	}
}
