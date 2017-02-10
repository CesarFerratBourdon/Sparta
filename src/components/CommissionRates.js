import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`${i} %`} />);
}

class CommissionRates extends Component {
//Need to find a way to refactor this.
  handleChange = (event, value) => {
    var index = 0;
    this.props.newCommissionRates(value, index);
  };
  handleChange1 = (event, value) => {
    var index = 1;
    this.props.newCommissionRates(value, index);
  };
  handleChange2 = (event, value) => {
    var index = 2;
    this.props.newCommissionRates(value, index);
  };
  handleChange3 = (event, value) => {
    var index = 3;
    this.props.newCommissionRates(value, index);
  };

  render () {
    const { commissionRates, poolOptions } = this.props;
    return (
          <div style={{width: '100%', maxWidth: 250, margin: 'auto', float: 'right'}}>Adjust commission rates
            <SelectField floatingLabelText={poolOptions[0]} value={commissionRates[0]} onChange={this.handleChange} maxHeight={200}>{items}</SelectField>
            <SelectField floatingLabelText={poolOptions[1]} value={commissionRates[1]} onChange={this.handleChange1} maxHeight={200}>{items}</SelectField>
            <SelectField floatingLabelText={poolOptions[2]} value={commissionRates[2]} onChange={this.handleChange2} maxHeight={200}>{items}</SelectField>
            <SelectField floatingLabelText={poolOptions[3]} value={commissionRates[3]} onChange={this.handleChange3} maxHeight={200}>{items}</SelectField>
          </div>
    )
  }
};

CommissionRates.defaultProps = {poolOptions: [ 'Win', 'Place', 'Exact', 'Quinella']};

export default CommissionRates;
