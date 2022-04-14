import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import UserActions from '../actions/UserActions';
import Header from '../includes/header';
import RegistrationForm from '../includes/registrationForm';

class RegisterPage extends React.Component {
	constructor(props) {
		super(props);
		this.saveUser = this.saveUser.bind(this);
	}

	saveUser(user) {
		UserActions.addUser(user);
		this.props.history.push('/');
		alert('Registered Successfully! Please Sign in to continue.');
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
										Register
									</Card.Title>
									<Card.Text>
										<RegistrationForm onSave={this.saveUser} />
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

export default RegisterPage;
