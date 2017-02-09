import React from 'react';

class Pool extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: props.title,
    }
  }

  render () {
    return (
      <div>
          <i>{this.state.title}</i>
          <p><b>$ {this.props.amount}</b></p>
      </div>
    )
  }
};

Pool.defaultProps = {amount: 0};

export default Pool;
