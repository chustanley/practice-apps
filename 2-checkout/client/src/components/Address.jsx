import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (this.props.trigger) ? (
    <div className='popUp'>
      <div className='popUpBox'>
        <h1>SHIPPING ADDRESS</h1>

        <h3>Name: {this.props.name}</h3>
        <h3>Email: {this.props.email}</h3>

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
        <button onClick={this.props.hideAddress} className='nextButton'>next</button>
      </div>
    </div>
    ) : '';
  }
}

export default Address;