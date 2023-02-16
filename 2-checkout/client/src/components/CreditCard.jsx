import React from 'react';
var $ = require('jquery');
class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }



  addingCreditCard = () => {
    var creditCard = document.getElementById('creditCardInput').value;
    var expiration = document.getElementById('expirationInput').value;
    var cvv = document.getElementById('cvvInput').value;
    var billingZipcode = document.getElementById('billingZipInput').value;
    var email = this.props.email;

    $.ajax({
      type: 'POST',
      url: 'credit',
      data: {
        email: email,
        creditCard: creditCard,
        expiration: expiration,
        cvv: cvv,
        billingZipcode: billingZipcode
      },
      success: (success) => {
        console.log('success', success);
      },
      error: (error) => {
        console.log('error', error);
      }
    });

    this.props.hideCreditCard()
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
          <button onClick={this.addingCreditCard} className='nextButton'>next</button>
        </div>
      </div>
    ) : '';
  }
}

export default CreditCard;