import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import SinglePost from "./components/singlePost";
import Skills from "./components/skills";
import Project from "./components/project";
import NavBar from "./components/navBar";
import Education from "./components/education";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/skill/:slug' />
        <Route component={Skills} path='/skill' />
        <Route component={Project} path='/project' />
        <Route component={Education} path='/education' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
