import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (

    <Router>
      <div className="App">
      <nav>
        <Link to="/"></Link>
        {/* <Link to="/about">About</Link>
        <Link to="/company">Company</Link> */}
      </nav>

        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route> */}
          <Route path="/"><Dashboard/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
