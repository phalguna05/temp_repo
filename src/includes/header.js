import React from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { withRouter } from 'react-router-dom';
import UserActions from '../actions/UserActions';
import UserApi from '../data/UserApi';
import UserStore from '../stores/UserStore';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
		};
	}

	componentDidMount() {
		//const currentUser = UserStore.getCurrentUser()
		const userId = UserStore.getCurrentUser();
		UserApi.getUserById(userId, (user) => {
			this.setState({ user });
		});
	}

	render() {
		const currentUser = UserStore.getCurrentUser();
		return (
			<div>
				<Navbar style={{ backgroundColor: 'transparent' }} expand='lg'>
					<Navbar.Brand style={{ fontWeight: 'bold' }}>
						InventoryDemo
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav
							className='mr-auto'
							style={{
								fontWeight: 'bold',
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Nav.Link href='/'>About</Nav.Link>
							<Nav.Link href='/viewProducts'>ViewProducts</Nav.Link>
							<Nav.Link href='/topViewedProducts'>TopViewedProducts</Nav.Link>
							{currentUser ? (
								<>
									<Nav.Link href='/addNewProduct'>AddNewProducts</Nav.Link>
									<Nav.Link href={`/userDetails/${this.state.user.id}`}>
										Profile
									</Nav.Link>
								</>
							) : null}
						</Nav>
					</Navbar.Collapse>
					{currentUser ? (
						<Button
							variant='oultine-dark'
							onClick={() => {
								UserActions.signoutUser();
								this.props.history.push('/');
							}}
						>
							Sign Out
						</Button>
					) : null}
					{!currentUser ? (
						<Button
							variant='oultine-dark'
							onClick={() => {
								//UserActions.signoutUser()
								this.props.history.push('/signIn');
							}}
						>
							Sign In
						</Button>
					) : null}
				</Navbar>
			</div>
		);
	}
}

export default withRouter(Header);
