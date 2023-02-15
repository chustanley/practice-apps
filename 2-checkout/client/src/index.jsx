import React from "react";
import ReactDom from "react-dom";
import Account from './components/Account.jsx';
import Address from './components/Address.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountTrigger: false,
      addressTrigger: false,
      name: '',
      email: ''
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
    <Address trigger={this.state.addressTrigger} name={this.state.name} email={this.state.email}/>
  </div>
  }
}

ReactDom.render(<Home color='yellow' transmission='manual'/>, document.getElementById('root'))