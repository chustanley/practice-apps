import React from 'react';


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  render () {
    return (this.props.trigger) ? (
    <div className='popUp'>
      <div className='popUpBox'>
        <h1 className='accountInput' >Account Creation</h1>

          <div className='accountInput'>
            <label htmlFor='name'>Name</label>
            <input id='nameInput'></input>
          </div>

            <br></br>

          <div className='accountInput'>
            <label htmlFor='email'>Email</label>
            <input id='emailInput'></input>
          </div>

            <br></br>
          <div className='accountInput'>
            <label htmlFor='password'>Password</label>
            <input id='passwordInput'></input>
          </div>
        <button onClick={this.props.hideAccount} className='nextButton'>Login</button>
      </div>
    </div>
    ) : '';
  }
}

export default Account;