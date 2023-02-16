import React from "react";
import ReactDom from "react-dom";
import Account from './components/Account.jsx';
import Address from './components/Address.jsx';
import CreditCard from './components/CreditCard.jsx';
import Confirmation from './components/Confirmation.jsx';
var $ = require('jquery');



class Home extends React.Component {
  constructor(props) {



    super(props);
    this.state = {
      accountTrigger: false,
      addressTrigger: false,
      creditCardTrigger: false,
      confirmationTrigger: false,
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      phone: '',
      creditCard: '',
      expiration: '',
      cvv: '',
      billingZipcode: ''
    }
  }



  triggerAccount = () => {



    $.ajax({
      type: 'GET',
      url: '/cookie',
      success: (success) => { // if first time entering what do we do.
        // console.log('success cookie ---->', success);

        var userArray = success[0][0];

        this.setState({
          confirmationTrigger: true,
          name: userArray.name,
          email: userArray.email,
          address: userArray.address,
          city: userArray.city,
          state: userArray.state,
          zipcode: userArray.zipcode,
          phone: userArray.phone,
          creditCard: userArray.creditCard,
          expiration: userArray.expiration,
          cvv: userArray.cvv,
          billingZipcode: userArray.billingZip
        })
      },
      error: (error) => { // if cookie was already in there.. what do we do.
        console.log('failed cookie ---->', error);

        this.setState({
          accountTrigger: true
        })
      }
    });













  }

  hideAccount = (name, email) => {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;









    this.setState({
      accountTrigger: false,
      addressTrigger: true,
      name: name,
      email: email
    })
  }

  hideAddress = () => {
    var address = document.getElementById('addressInput').value;
    var city = document.getElementById('cityInput').value;
    var state = document.getElementById('stateInput').value;
    var zipcode = document.getElementById('zipcodeInput').value;
    var phone = document.getElementById('phoneInput').value;

    this.setState({
      addressTrigger: false,
      creditCardTrigger: true,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone
    })

  }

  hideCreditCard = () => {

    var creditCard = document.getElementById('creditCardInput').value;
    var expiration = document.getElementById('expirationInput').value;
    var cvv = document.getElementById('cvvInput').value;
    var billingZipcode = document.getElementById('billingZipInput').value;

    this.setState({
      creditCardTrigger: false,
      confirmationTrigger: true,
      creditCard: creditCard,
      expiration: expiration,
      cvv: cvv,
      billingZipcode: billingZipcode
    })
  }

  hideConfirmation = () => {
    this.setState({
      confirmationTrigger: false
    })
  }


  render() {
    // console.log(this.props) // javascript should be written in the render statement
    //return html

    return <div>
    <p>Hello, World!</p>
    <p>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
    </p>
    <button onClick={() => {this.triggerAccount()}}>cart</button>
    <Account trigger={this.state.accountTrigger} hideAccount={this.hideAccount} />
    <Address trigger={this.state.addressTrigger} name={this.state.name} email={this.state.email} hideAddress={this.hideAddress}/>
    <CreditCard trigger={this.state.creditCardTrigger} hideCreditCard={this.hideCreditCard} email={this.state.email}/>
    <Confirmation trigger={this.state.confirmationTrigger} info={this.state} hideConfirmation={this.hideConfirmation}/>
  </div>
  }
}

ReactDom.render(<Home color='yellow' transmission='manual'/>, document.getElementById('root'))