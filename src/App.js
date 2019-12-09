import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from '../src/components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ContactPage from './pages/contact/contact.component';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
         setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })
          }, () => {
            console.log(this.state);
          })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
      <Header/>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
          <Route exact path="/contact" component={ContactPage} />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
