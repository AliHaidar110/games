import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Home, SideBar } from "./components";
import { ROUTES } from "./resources/constants";

const App = () => {
	return (
		<Router>
			<SideBar />
			<Routes>
				<Route path={ROUTES.HOME} element={<Home />} />
			</Routes>
		</Router>
	);
};

export default App;
