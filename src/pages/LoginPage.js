import React, { memo } from "react";
import "../styles/login.css";
import logo from "../assets/logo-black.png";
import SignInForm from "../components/forms-login/SignInForm";

const LoginPage = () => {
	return (
		<div className='login_page'>
			<div className='header py-4'>
				<img width={190} src={logo} alt='logo' />
			</div>

			<ul className='sign_in__options mt-3'>
				<li>
					<strong className='text'>To continue, log in to Spotify.</strong>
				</li>
				<li>
					<button className='google__button'>CONTINUE WITH GOOGLE</button>
				</li>
				<li className='devider__ d-flex justify-content-center'>
					<span className='line__border'></span>
					<span>
						<small>
							<b>OR</b>
						</small>
					</span>
					<span className='line__border'></span>
				</li>
			</ul>

			<div className='d-flex justify-content-center'>
				<SignInForm />
			</div>

			<div className='d-flex flex-column justify-content-center footer'>
				<span className='text-center m-2'>
					<>
						<b>Don't have an account?</b>
					</>
				</span>
				<div className='m-auto m-2'>
					<button className='signup__button'>SIGN UP FOR SPOTIFY</button>
				</div>
			</div>
		</div>
	);
};

export default memo(LoginPage);
