import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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

        <Switch>
          <Route path="/courses"><Courses/></Route>
          <Route path="/courses_details"><CoursesDetails/></Route>
          {/* <Route path="/new_course"><AddNewCourse/></Route> */}
          <Route path="/"><Dashboard/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
