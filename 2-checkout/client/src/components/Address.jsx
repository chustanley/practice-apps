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
        <h1>ADDRESS</h1>
        <h3>{this.props.name}</h3>
        <h3>{this.props.email}</h3>
      </div>
    </div>
    ) : '';
  }
}

export default Address;