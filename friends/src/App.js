import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.scss";
import PrivateRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li className="login">
                <Link className="login link" to="/login">
                  Login
                </Link>
              </li>
              <li className="protect">
                <Link className="protected link" to="/protected">
                  Protected Page
                </Link>
              </li>
            </ul>
            <Switch>
              <PrivateRoute exact path="/protected" component={FriendsList} />
              <Route path="/login" component={Login} />
              <Route component={AddFriend} />
              {/* component ==> history, match (params), location */}
              {/* <Route render={props => <GasPrices {...props} />} />
          <Route>
            <FriendsList />
          </Route> */}
            </Switch>
          </nav>
        </header>
      </div>
    </Router>
  );
}

export default App;
