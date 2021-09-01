import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Nav from "./components/nav/nav";
import Dashboard from "./components/user/dashboard/dashboard";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/" exact component={Nav}/>
                <Route path="/dashboard/me" exact component={Dashboard}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
