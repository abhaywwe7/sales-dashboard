import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";
import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Userlist from "./pages/userlist/Userlist.jsx";
import User from "./pages/user/User.jsx";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <Userlist />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
