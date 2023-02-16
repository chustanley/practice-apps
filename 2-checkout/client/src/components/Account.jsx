import React from 'react';
var $ = require('jquery');


class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  savingAccountInfo = () => {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

    $.ajax({
      type: 'POST',
      url: '/account',
      data: {
        name: name,
        email: email,
        password: password
      },
      success: (success) => {
        console.log(success);
        this.props.hideAccount();
      },
      error: (error) => {
        console.log('error', error)
      }
    })
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
        <button onClick={this.savingAccountInfo} className='nextButton'>Login</button>
      </div>
    </div>
    ) : '';
  }
}

export default Account;