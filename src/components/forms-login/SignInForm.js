import React, { memo } from "react";
import "../../styles/forms.css";

const SignInForm = () => {
	return (
		<form className='forms'>
			<div className='d-flex flex-column m-3 form__groups'>
				<label htmlFor='username'>Email address or username</label>
				<input
					name='username'
					type='text'
					placeholder='Email address or username'
				/>
			</div>

			<div className='d-flex flex-column m-3 form__groups'>
				<label htmlFor='password'>Password</label>
				<input name='password' type='password' placeholder='Password' />
			</div>

			<div className='d-flex flex-column m-3'>
				<a href=''>Forgot your password?</a>
			</div>

			<div className='d-flex justify-content-between m-3'>
				<div className='check__box'>
					<input id='remember' name='remember' type='checkbox' hidden />
					<label htmlFor='remember' className='input__box'>
						<i className='fa fa-check tic__' aria-hidden='true'></i>
					</label>
					<label htmlFor='remember'>Remember me</label>
				</div>
				<div className='login__button'>
					<button>LOG IN</button>
				</div>
			</div>

			<hr />
		</form>
	);
};

export default memo(SignInForm);
