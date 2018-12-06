import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import ViewBooks from './ViewBooks';
import ProfilePage from './ProfilePage'
import UploadBook from './UploadBook';
import UploadBookForm from './UploadBookForm'
import NavBar from './NavBar'
import ExchangeBook from './ExchangeBook'
import  UpdateProfile from './UpdateProfile'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

//<Route path='/roster' component={Roster}/>
//<Route path='/schedule' component={Schedule}/>


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/loginform' component={LoginForm}/>
      <Route path='/signupform' component={SignUpForm}/>
      <Route path='/profilepage' component={ProfilePage}/>
      <Route path='/viewbooks' component={ViewBooks}/>
      <Route path='/uploadbook' component={UploadBook}/>
      {/* <Route path='/uploadbookform' component={UploadBookForm}/> */}
      <Route path='/exchangebook' component={ExchangeBook}/>
      <Route path='/updateprofile' component={UpdateProfile}/>

      
    </Switch>
  </main>
)

export default Main