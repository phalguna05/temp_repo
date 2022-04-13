import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import UserActions from '../actions/UserActions';
import UserApi from '../data/UserApi';

class SignInForm extends React.Component {
	render() {
		return (
			<Formik
				initialValues={{
					userId: '',
					password: '',
				}}
				validationSchema={Yup.object().shape({
					userId: Yup.string()
						.email('User Id is invalid')
						.required('User Id is required'),
					password: Yup.string()
						.min(6, 'Password must be at least 6 characters')
						.required('Password is required'),
				})}
				onSubmit={(fields) => {
					UserApi.getUser(fields.userId, fields.password, (user) => {
						if (user !== undefined) {
							UserActions.signinUser(fields.userId);
							this.props.history.push('/viewProducts');
						} else {
							alert('undefined user!');
						}
					});
				}}
			>
				{({
					errors,
					status,
					touched,
					handleChange,
					handleSubmit,
					handleBlur,
					resetForm,
					values,
				}) => (
					<Form onSubmit={handleSubmit}>
						<Form.Group style={{ textAlign: 'left', fontFamily: 'sans-serif' }}>
							<Form.Label>User ID</Form.Label>
							<Form.Control
								name='userId'
								type='text'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.userId}
								className={
									'form-control' +
									(errors.userId && touched.userId ? ' is-invalid' : '')
								}
							/>
							<ErrorMessage
								name='userId'
								component='div'
								className='invalid-feedback'
							/>
						</Form.Group>
						<Form.Group style={{ textAlign: 'left', fontFamily: 'sans-serif' }}>
							<Form.Label>Password</Form.Label>
							<Form.Control
								name='password'
								type='password'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
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
						</Form.Group>
						<Form.Group
							style={{
								textAlign: 'left',
								fontFamily: 'sans-serif',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
							}}
						>
							<button
								type='submit'
								className='btn btn-primary'
								style={{ marginBottom: '15px' }}
							>
								Sign In
							</button>
							<button
								type='reset'
								className='btn btn-secondary'
								onClick={resetForm}
							>
								Reset
							</button>
						</Form.Group>
						<div
							className='form-group'
							style={{
								fontFamily: 'sans-serif',
								display: 'flex',
								fontSize: '14px',
								justifyContent: 'center',
							}}
						>
							<p>New User?{'  '}</p>
							<a href='/register'> Register</a>
						</div>
					</Form>
				)}
			</Formik>
		);
	}
}

export default withRouter(SignInForm);
