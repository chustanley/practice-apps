import React from 'react';

class Confirmation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }

  render () {
    console.log(this.props.info)
    return (this.props.trigger) ? (
      <div className='popUp'>
        <div className='popUpBox'>
          <h1>CONFIRMATION</h1>


          <div>
            <h3>Account Information</h3>
            <div>{this.props.info.name}</div>
            <div>{this.props.info.email}</div>
            <div>{this.props.info.phone}</div>
          </div>

          <div>
            <h3>Shipping Address</h3>
            <div>{this.props.info.address}</div>
            <div>{this.props.info.city}</div>
            <div>{this.props.info.state}</div>
            <div>{this.props.info.zipcode}</div>
          </div>

          <div>
            <h3>Billing Information</h3>
            <div>{this.props.info.creditCard}</div>
            <div>{this.props.info.expiration}</div>
            <div>{this.props.info.cvv}</div>
            <div>{this.props.info.billingZipcode}</div>
          </div>







          <button onClick={this.props.hideConfirmation} className='nextButton'>Purchase</button>
        </div>
      </div>
    ) : '';
  }
}

export default Confirmation;