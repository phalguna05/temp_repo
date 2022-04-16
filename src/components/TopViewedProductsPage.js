import _ from 'lodash';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Pie } from 'react-chartjs-2';
import ProductApi from '../data/ProductApi';
import Header from '../includes/header';

export default class TopViewedProductsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
	}

	componentDidMount() {
		ProductApi.getProductViews((productViews) => {
			const grouped = _(productViews).groupBy('productName').value();
			let labelArray = Object.keys(grouped);
			const colors = getBackgroundColors(Object.keys(labelArray).length);
			const data = {
				labels: labelArray,
				datasets: [
					{
						label: 'Product Views',
						backgroundColor: colors,
						borderColor: colors,
						borderWidth: 1,

						data: Object.keys(grouped).map((key) => grouped[key].length),
					},
				],
			};
			this.setState({ data });
		});
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Header />
				<Container className='mt-5'>
					<Row>
						<Col md={{ span: 6, offset: 3 }}>
							<Pie
								data={this.state.data}
								options={{
									title: {
										display: true,
										text: 'Top Viewed Products',
										fontSize: 20,
									},
									legend: {
										display: true,
										position: 'right',
									},
								}}
							/>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
function getBackgroundColors(lengthOfArr) {
	let colors = [];
	for (let i = 0; i < lengthOfArr; i++) {
		colors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
	}
	return colors;
}
