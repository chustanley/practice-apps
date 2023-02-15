import React from "react";
import ReactDom from "react-dom";
import Account from './components/Account.jsx';
import Address from './components/Address.jsx';
import CreditCard from './components/CreditCard.jsx';
import Confirmation from './components/Confirmation.jsx';

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
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    }
  }



  triggerAccount = () => {
    this.setState({
      accountTrigger: true
    })
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
    var city = document.getElementById('cityInput').value;
    var state = document.getElementById('stateInput').value;
    var zipcode = document.getElementById('zipcodeInput').value;
    var phone = document.getElementById('phoneInput').value;

    this.setState({
      addressTrigger: false,
      creditCardTrigger: true,
      city: city,
      state: state,
      zipcode: zipcode,
      phone: phone
    })

  }

  hideCreditCard = () => {
    this.setState({
      creditCardTrigger: false,
      confirmationTrigger: true
    })
  }

  hideConfirmation = () => {
    this.setState({
      confirmationTrigger: false
    })
  }


  render() {
    console.log(this.state)
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
    <CreditCard trigger={this.state.creditCardTrigger} hideCreditCard={this.hideCreditCard} />
    <Confirmation trigger={this.state.confirmationTrigger} info={this.state} hideConfirmation={this.hideConfirmation}/>
  </div>
  }
}

ReactDom.render(<Home color='yellow' transmission='manual'/>, document.getElementById('root'))