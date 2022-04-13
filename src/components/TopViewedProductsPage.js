import _ from 'lodash';
import React from 'react';
import ProductApi from '../data/ProductApi';
import Header from '../includes/header';

export default class TopViewedProductsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sortedList: [],
		};
	}

	componentDidMount() {
		ProductApi.getProductViews((productViews) => {
			const grouped = _(productViews).groupBy('productName').value();
			let arr = [];
			for (let [key, value] of Object.entries(grouped)) {
				let tempObj = {
					name: key,
					count: value.length,
				};
				arr.push(tempObj);
			}
			arr.sort(compare);
			this.setState({ sortedList: arr });
		});
	}

	render() {
		return (
			<>
				<Header />
				<h3>Top Viewed Products</h3>
				<div
					style={{
						height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						marginLeft: '30vw',
						marginTop: '10vh',
					}}
				>
					{this.state.sortedList.map((item) => (
						<div
							style={{
								backgroundColor: '#feffff',
								boxShadow:
									'0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
								border: 'none',
								marginBottom: '10px',
								borderRadius: '5px',
								display: 'flex',
								maxWidth: '40vw',
								padding: '5px 15px',
								justifyContent: 'space-between',
								textAlign: 'left',
							}}
						>
							<p>Product Name : </p>{' '}
							<p style={{ fontWeight: 'bold', textAlign: 'left' }}>
								{item.name}
							</p>
							<p>Count of Views</p>{' '}
							<p style={{ fontWeight: 'bold' }}>{item.count}</p>
						</div>
					))}
				</div>
			</>
		);
	}
}

function compare(a, b) {
	if (a.count > b.count) {
		return -1;
	}
	if (a.count < b.count) {
		return 1;
	}
	return 0;
}
