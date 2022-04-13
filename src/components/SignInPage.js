import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../includes/header';
import SignInForm from '../includes/signInForm';

const SignInPage = () => {
	return (
		<div style={{ height: '100vh' }}>
			<Header />
			<Container className='mt-5 bt-5'>
				<Row>
					<Col></Col>
					<Col xs={5}>
						<Card
							className='text-center mt-5'
							text='dark'
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
									Sign In
								</Card.Title>
								<Card.Text>
									<SignInForm />
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col></Col>
				</Row>
			</Container>
		</div>
	);
};

export default SignInPage;
