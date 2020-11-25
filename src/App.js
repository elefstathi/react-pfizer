import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import CoursesDetails from "./components/CoursesDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/"></Link>
          <Link to="/courses"></Link>
          <Link to="/courses_details"></Link>
        </nav>
        <Switch>
          <Route path="/" render={(props) => <Dashboard {...props} />} />
          <Route path="/courses"
            render={(props) => <Courses {...props} />}
          />
          <Route
            path="/courses_details/:courseId"
            render={(props) => <CoursesDetails {...props} course="" />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
