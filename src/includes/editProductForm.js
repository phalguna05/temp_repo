import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const styles = {
	formGroup: {
		textAlign: 'left',
		fontFamily: 'sans-serif',
		marginBottom: '15px',
	},
	buttonGroup: {
		textAlign: 'left',
		fontFamily: 'sans-serif',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
};

class EditProductForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.product === undefined) {
			return null;
		}
		return (
			<Formik
				initialValues={{
					productName: this.props.product.productName,
					productDescription: this.props.product.productDescription,
					manufacturer: this.props.product.manufacturer,
					price: this.props.product.price,
					quantity: this.props.product.quantity,
				}}
				validationSchema={Yup.object().shape({
					productName: Yup.string().required('Product Name is required'),
					productDescription: Yup.string().required(
						'Product description is required'
					),
					manufacturer: Yup.string().required('Manufacturer is required'),
					price: Yup.string().required('Price is required'),
					quantity: Yup.string().required('Quantity is required'),
				})}
				onSubmit={(fields) => {
					//alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 5))
					this.props.onUpdate({ id: this.props.product.id, ...fields });
				}}
				render={({ errors, status, touched }) => (
					<Form>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='productName'>Product Name</label>
							<Field
								name='productName'
								type='text'
								className={
									'form-control' +
									(errors.productName && touched.productName
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='productName'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='productDescription'>Product Description</label>
							<Field
								name='productDescription'
								type='text'
								className={
									'form-control' +
									(errors.productDescription && touched.productDescription
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='productDescription'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='manufacturer'>Manufacturer</label>
							<Field
								name='manufacturer'
								type='text'
								className={
									'form-control' +
									(errors.manufacturer && touched.manufacturer
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='manufacturer'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='price'>Price</label>
							<Field
								name='price'
								type='text'
								className={
									'form-control' +
									(errors.price && touched.price ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage
								name='price'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='quantity'>Quantity</label>
							<Field
								name='quantity'
								type='number'
								className={
									'form-control' +
									(errors.quantity && touched.quantity ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage
								name='quantity'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.buttonGroup}>
							<button
								type='submit'
								className='btn btn-primary'
								style={{ marginBottom: '15px' }}
							>
								Update Product
							</button>
							<button type='reset' className='btn btn-secondary'>
								Reset
							</button>
						</div>
					</Form>
				)}
			/>
		);
	}
}

export default EditProductForm;
