import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../includes/header';
import Customization from '../resources/customization.svg';
import Products from '../resources/products.svg';
import TopRated from '../resources/topRated.svg';

const carouselItemList = [
	{
		imgSrc: Products,
		heading: 'Lots of products to choose from....',
		description: 'There is a large pool of products from which you can choose.',
	},
	{
		imgSrc: Customization,
		heading: 'Customizable Fields......',
		description: 'You can customize the fields to only see what you want.',
	},
	{
		imgSrc: TopRated,
		heading: 'View our top rated products.....',
		description: 'You can see our top rated products without any effort.',
	},
];
const AboutPage = () => {
	return (
		<div>
			<Header />
			<Carousel
				variant='dark'
				style={{
					backgroundSize: 'cover',
					height: '94vh',
					width: '100%',
					maxWidth: '1440px',
					margin: '0',
					padding: '0',
				}}
			>
				{carouselItemList.map((item, index) => (
					<Carousel.Item key={index}>
						<img
							className='d-block w-100'
							style={{
								backgroundSize: 'cover',
								height: '88vh',
								width: '100vw',
								opacity: '0.8',
							}}
							src={item.imgSrc}
							alt={item.heading}
						/>
						<Carousel.Caption
							style={{
								color: '#41b3a3',
								textAlign: 'left',
								marginLeft: '80px',
							}}
						>
							<h3>{item.heading}</h3>
							{/* <p>{item.description}</p> */}
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
			<Container className='mt-4'>
				<Row>
					<Col>
						<Card
							style={{
								backgroundColor: 'transparent',
								border: 'none',
								marginTop: '20vh',
								marginBottom: '30vh',
								color: '#41b3a3',
							}}
							id='about'
						>
							<h1>About</h1>
							<p
								style={{
									textIndent: '50px',
									textAlign: 'justify',
									letterSpacing: '3px',
									color: '#41b3a3',
								}}
							>
								Products Inventory is an application made using React JS. It
								uses Bootstrap for a responsive User Interface. You can start
								off by viewing our products in our inventory, search there to
								find the product you're looking for. There's a bar chart which
								shows our top viewed products for a better User Experience.
								There's also an option to customize the fields you wish to see
								in the products list page. This app will open up more features
								for you, once you signin into our app. For that you'll need to
								register into our app first, by providing a few basic details.
								Once successfully registered, you can sign in when you're
								authenticated. When you become an authenticated user, you can do
								a lot of things, like, viewing product details, adding products,
								deleting or modifying them. You also have the option of deleting
								multiple products in one go. You can also view about yourself by
								clicking on your name, on the navigation bar. There are a lot of
								features in here, so what are you waiting for! Come, press that
								Sign in or Register button and enjoy Products Inventory!
							</p>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutPage;
