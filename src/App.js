import "./App.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config/firbaseConfig";
import { memo } from "react";
import "./styles/new/style.css";
import PublicRoutes from "./routes/PublicRoutes";
firebase.initializeApp(firebaseConfig);

function App() {
	return (
		<div className='App'>
			<PublicRoutes />
		</div>
	);
}

export default memo(App);
