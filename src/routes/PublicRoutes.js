import React, { memo } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/new/HomePage";

const PublicRoutes = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' component={HomePage} />
			</Switch>
		</Router>
	);
};

export default memo(PublicRoutes);
