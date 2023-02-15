import React from 'react';

class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return (this.props.trigger) ? (
      <div className='popUp'>
        <div className='popUpBox'>
          <h1>Credit Card</h1>

          <div className='accountInput'>
            <label htmlFor='creditCardInput'>Credit Card</label>
            <input id='creditCardInput'></input>
          </div>

          <div className='accountInput'>
            <label htmlFor='expirationInput'>Expiration Date</label>
            <input id='expirationInput'></input>
          </div>

          <div className='accountInput'>
            <label htmlFor='cvvInput'>CVV</label>
            <input id='cvvInput'></input>
          </div>

          <div className='accountInput'>
            <label htmlFor='billingZipInput'>Billing Zipcode</label>
            <input id='billingZipInput'></input>
          </div>
          <button onClick={this.props.hideCreditCard} className='nextButton'>next</button>
        </div>
      </div>
    ) : '';
  }
}

export default CreditCard;