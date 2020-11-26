import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import CoursesDetails from "./components/CoursesDetails";
import FormAddCourse from "./components/FormAddCourse";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/"></Link>
          <Link to="/courses"></Link>
          <Link to="/courses_details"></Link>
          <Link to="/add_new_course"></Link>
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
          <Route
            path="/add_new_course"
            render={(props) => <FormAddCourse {...props} course="" />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
