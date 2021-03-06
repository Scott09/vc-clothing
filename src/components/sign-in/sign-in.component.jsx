import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import { auth } from 'firebase';

class SignIn extends React.Component {
  constructor(props) {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }


  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })

    } catch (error) {
      console.log(error.message);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState( { [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <FormInput label="email" type="email" name="email" value={this.state.email} handleChange={this.handleChange} required />
          <FormInput label="password" type="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>

    );
  }
}

export default SignIn;