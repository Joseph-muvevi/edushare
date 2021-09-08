import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom"
import './App.css';
import Nav from "./components/nav/nav";
import Dashboard from "./components/user/dashboard/dashboard";


function App() {
	return (
		<div className="App">
				<Router>
						<Switch>
								<Route path="/dashboard" component={withRouter(Dashboard)}/>
								<Route path="/" exact component={withRouter(Nav)}/>
						</Switch>
				</Router>
		</div>
	);
}

export default App;
