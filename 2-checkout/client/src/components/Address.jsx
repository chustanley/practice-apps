import React from 'react';
var $ = require('jquery');
class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

savingAddress = () => {
  var address = document.getElementById('addressInput').value;
  var city = document.getElementById('cityInput').value;
  var state = document.getElementById('stateInput').value;
  var zipcode = document.getElementById('zipcodeInput').value;
  var phone = document.getElementById('phoneInput').value;

  $.ajax({
    type: 'POST',
    url: '/address',
    data: {
      email: this.props.email,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone
    },
    success: (success) => {
      console.log('success', success);
    },
    error: (error) => {
      console.log('error', error);
    }

  });



  this.props.hideAddress()
}


  render () {
    return (this.props.trigger) ? (
    <div className='popUp'>
      <div className='popUpBox'>
        <h1>SHIPPING ADDRESS</h1>

        <h3>Name: {this.props.name}</h3>
        <h3>Email: {this.props.email}</h3>

        <div className='accountInput'>
          <label htmlFor='addressInput'>Address</label>
          <input id='addressInput'></input>
        </div>

        <div className='accountInput'>
          <label htmlFor='cityInput'>City</label>
          <input id='cityInput'></input>
        </div>

        <div className='accountInput'>
          <label htmlFor='stateInput'>State</label>
          <input id='stateInput'></input>
        </div>

        <div className='accountInput'>
          <label htmlFor='zipcodeInput'>Zipcode</label>
          <input id='zipcodeInput'></input>
        </div>

        <div className='accountInput'>
          <label htmlFor='phoneInput'>Phone Number</label>
          <input id='phoneInput'></input>
        </div>
        <button onClick={this.savingAddress} className='nextButton'>next</button>
      </div>
    </div>
    ) : '';
  }
}

export default Address;