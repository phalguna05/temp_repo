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

class RegistrationForm extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					mobileNumber: '',
					location: '',
				}}
				validationSchema={Yup.object().shape({
					firstName: Yup.string().required('First Name is required'),
					lastName: Yup.string().required('Last Name is required'),
					email: Yup.string()
						.email('Email is invalid')
						.required('Email is required'),
					password: Yup.string()
						.min(6, 'Password must be at least 6 characters')
						.required('Password is required'),
					mobileNumber: Yup.string()
						.min(10, 'Mobile number cannot be less than 10 digits')
						.max(10, 'Mobile number cannot exceed 10 digits')
						.required('Mobile number is required'),
					location: Yup.string().required('Location is required'),
				})}
				onSubmit={(fields, { props }) => {
					/*alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 6))*/
					this.props.onSave(fields);
				}}
				render={({ errors, status, touched }) => (
					<Form>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='firstName'>First Name</label>
							<Field
								name='firstName'
								type='text'
								className={
									'form-control' +
									(errors.firstName && touched.firstName ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage
								name='firstName'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='lastName'>Last Name</label>
							<Field
								name='lastName'
								type='text'
								className={
									'form-control' +
									(errors.lastName && touched.lastName ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage
								name='lastName'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='email'>Email</label>
							<Field
								name='email'
								type='text'
								className={
									'form-control' +
									(errors.email && touched.email ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage
								name='email'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='password'>Password</label>
							<Field
								name='password'
								type='password'
								className={
									'form-control' +
									(errors.password && touched.password ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage
								name='password'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='mobileNumber'>Mobile Number</label>
							<Field
								name='mobileNumber'
								type='number'
								className={
									'form-control' +
									(errors.mobileNumber && touched.mobileNumber
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='mobileNumber'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group' style={styles.formGroup}>
							<label htmlFor='location'>Location</label>
							<Field
								name='location'
								type='text'
								className={
									'form-control' +
									(errors.location && touched.location ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage
								name='location'
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
								Register
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

export default RegistrationForm;
