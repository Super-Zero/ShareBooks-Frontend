import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ViewBooks from "./ViewBooks";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";
import UploadBookForm from "./UploadBookForm";
import NavBar from "./NavBar";
import ExchangeBook from "./ExchangeBook";
import UpdateProfile from "./UpdateProfile";
import InterestedBooks from "./InterestedBooks";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

//<Route path='/roster' component={Roster}/>
//<Route path='/schedule' component={Schedule}/>

const Main = props => {
  const setUser = props.setUser;
  console.log("---props in main", props);
  return (
    <React.Fragment>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/loginform"
            render={props => <LoginForm {...props} setUser={setUser} />}
          />
          <Route path="/signupform" component={SignUpForm} test={"test"} />
          <Route path="/profilepage/:id" component={ProfilePage} />
          <Route path="/viewbooks/:id" component={ViewBooks} />
          <Route path="/search" component={SearchPage} />
          <Route path="/interestedbooks/:id" component={InterestedBooks} />
          <Route path="/exchangebook" component={ExchangeBook} />
          <Route path="/updateprofile" component={UpdateProfile} />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default Main;
