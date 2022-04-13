import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import UserApi from '../data/UserApi';
import Header from '../includes/header';
import UserStore from '../stores/UserStore';

class UserDetailsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
		};
		if (UserStore.getCurrentUser() == undefined) {
			alert('User not signed in.');
			props.history.push('/viewProducts');
		}
	}

	componentDidMount() {
		const userId = UserStore.getCurrentUser();
		UserApi.getUserById(userId, (user) => {
			this.setState({ user });
		});
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Header />
				<Container className='mt-5'>
					<Row>
						<Col></Col>
						<Col md='auto'>
							<Card
								style={{
									backgroundColor: '#feffff',
									boxShadow:
										'0 5px 10px rgba(154, 160, 185, 0.05),0 15px 40px rgba(166, 173, 201, 0.2)',
									border: 'none',
								}}
							>
								<Card.Img
									variant='bottom'
									src={`https://picsum.photos/seed/${this.props.match.params.id}/478/185`}
								/>
								<Card.Header style={{ textAlign: 'left' }}>
									<i>Hello, </i>
									<b>
										{this.state.user.firstName} {this.state.user.lastName}
									</b>
								</Card.Header>
								<ListGroup variant='flush' style={{ textAlign: 'left' }}>
									<ListGroup.Item>
										<b>User Id:</b> {this.state.user.email}
									</ListGroup.Item>
									<ListGroup.Item>
										<b> Password:</b> {this.state.user.password}
									</ListGroup.Item>
									<ListGroup.Item>
										<b>Location:</b> {this.state.user.location}
									</ListGroup.Item>
									<ListGroup.Item>
										<b> Mobile:</b> {this.state.user.mobileNumber}
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
						<Col></Col>
					</Row>
				</Container>
			</div>
		);
	}
}
export default UserDetailsPage;
