import React, { memo } from "react";
import logo from "../../assets/Spotify_Logo_RGB_White.png";
import { LOGIN_URL } from "../../config/app.config";

const LoginPage = () => {
	return (
		<div className='login'>
			<div className='container text-center'>
				<img width={370} src={logo} alt='logo' />
			</div>
			<div className='btn__container'>
				<a href={LOGIN_URL}>Sign in with Spotify</a>
			</div>
		</div>
	);
};

export default memo(LoginPage);
