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
          {/* <Link to="/new_course"></Link> */}
        </nav>

        {/* <Switch> */}
        <Route exact path="/courses">
          <Courses />
        </Route>
        <Route
          path="/courses_details/:courseId"
          render={(props) => <CoursesDetails {...props} course="" />}
        />
        <Route
          path="/"
          render={(props) => <Dashboard {...props}/>}
        />
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
