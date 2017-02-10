import React, { Component } from 'react';

class Pool extends Component {

  render () {
    return (
      <div>
          <i>{this.props.title}</i>
          <p><b>$ {this.props.amount}</b></p>
      </div>
    )
  }
};

Pool.defaultProps = {amount: 0};

export default Pool;
