import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";

function App() {
  return (

    <Router>
      <div className="App">
      <nav>
        <Link to="/"></Link>
        <Link to="/courses"></Link>
        {/* <Link to="/company">Company</Link> */} 
      </nav>

        <Switch>
          <Route path="/courses"><Courses/></Route>
          {/* <Route path="/topics"><Topics /></Route> */}
          <Route path="/"><Dashboard/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
