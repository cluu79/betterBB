import React from 'react';
import './sign-in.styles.scss'


class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: "", password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({[name]: value})
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I have an account</h2>
        <span>Sign in with your email and passowrds</span>

        <form onSubmit={this.handleSubmit}>
          <input name='email'
            value={this.state.email}
            type='email'
            onChange={this.handleChange}
            required />
          
          <label>email</label>

          <input name='password'
            value={this.state.password}
            type='password'
            required />
          
          <label htmlFor=''>Password</label>

          <input type="submit" value="submit Form"/>
        </form>
      </div>
    );
  }

}

export default SignIn;