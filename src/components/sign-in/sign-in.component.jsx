import React from 'react';

import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
  constructor(props) {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }


  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
  }

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
          <label>Email</label>
          <FormInput label="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Password</label>
          <FormInput label="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          <input type="submit" value="Submit Form" />
        </form>
      </div>

    );
  }
}

export default SignIn;