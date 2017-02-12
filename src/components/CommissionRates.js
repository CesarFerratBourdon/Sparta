import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { calculateDividends } from '../helpers/utilities';

var items = [];
for (var i = 0; i < 100; i++) {
  items.push(<MenuItem value={i} key={i} primaryText={`${i} %`} />);
};

class CommissionRates extends Component {

  handleChange = (event, id, value) => {
    var { commissionRates, podium, dividends } = this.props;
    var index = 0;
    console.log(id);
    if (id === 'firstCom') {
        index = 0;
    } else if (id === 'secondCom') {
        index = 1;
    } else if (id === 'thirdCom') {
        index = 2;
    } else {
        index = 3;
    };
    commissionRates[index] = value;
    if (dividends.length !== 0) {
      let allResults = calculateDividends(podium, commissionRates);
      dividends = allResults[0];
    };
    this.props.newCommissionRates(commissionRates, dividends);
  };

  render () {
    var { commissionRates, poolOptions } = this.props;
    return (
      <div style={{width: '100%', maxWidth: 250, margin: 'auto', float: 'right'}}>Adjust commission rates
        <SelectField floatingLabelText={poolOptions[0]} value={commissionRates[0]}
        onChange={(e, value) => this.handleChange(e,'firstCom', value)} maxHeight={200}>{items}</SelectField>
        <SelectField floatingLabelText={poolOptions[1]} value={commissionRates[1]}
        onChange={(e, value) => this.handleChange(e,'secondCom', value)} maxHeight={200}>{items}</SelectField>
        <SelectField floatingLabelText={poolOptions[2]} value={commissionRates[2]}
        onChange={(e, value) => this.handleChange(e,'thirdCom', value)} maxHeight={200}>{items}</SelectField>
        <SelectField floatingLabelText={poolOptions[3]} value={commissionRates[3]}
        onChange={(e, value) => this.handleChange(e,'fourthCom', value)} maxHeight={200}>{items}</SelectField>
      </div>
    )
  }
};

export default CommissionRates;
