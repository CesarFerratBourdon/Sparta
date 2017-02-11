import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { calculateDividends } from '../helpers/utilities'

const items = [];
for (let i = 0; i < 100; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`${i} %`} />);
}

class CommissionRates extends Component {
// Need to find a way to refactor these 4 functions into 1. Need to differentiate each child element items inside each SelectField
  handleChange = (event, value) => {
    var { commissionRates } = this.props;
    var index = 0;
    if (localStorage.getItem("podium") !== null) {
      var podium = JSON.parse(localStorage.getItem("podium"));
    };
    commissionRates[index] = value;
    // this.setState({commissionRates: commissionRates});
    let allResults = calculateDividends(podium, commissionRates);
    let dividends = allResults[0];
    let poolAmounts = allResults[1];
    this.props.newCommissionRates(commissionRates, dividends, podium, poolAmounts);
  };

  handleChange1 = (event, value) => {
    var { commissionRates } = this.props;
    var index = 1;
    if (localStorage.getItem("podium") !== null) {
      var podium = JSON.parse(localStorage.getItem("podium"));
    };
    commissionRates[index] = value;
    this.setState({commissionRates: commissionRates});
    let allResults = calculateDividends(podium, commissionRates);
    let dividends = allResults[0];
    let poolAmounts = allResults[1];
    this.props.newCommissionRates(commissionRates, dividends, podium, poolAmounts);
  };

  handleChange2 = (event, value) => {
    var { commissionRates } = this.props;
    var index = 2;
    if (localStorage.getItem("podium") !== null) {
      var podium = JSON.parse(localStorage.getItem("podium"));
    };
    commissionRates[index] = value;
    this.setState({commissionRates: commissionRates});
    let allResults = calculateDividends(podium, commissionRates);
    let dividends = allResults[0];
    let poolAmounts = allResults[1];
    this.props.newCommissionRates(commissionRates, dividends, podium, poolAmounts);
  };

  handleChange3 = (event, value) => {
    var { commissionRates } = this.props;
    var index = 3;
    if (localStorage.getItem("podium") !== null) {
      var podium = JSON.parse(localStorage.getItem("podium"));
    };
    commissionRates[index] = value;
    this.setState({commissionRates: commissionRates});
    let allResults = calculateDividends(podium, commissionRates);
    let dividends = allResults[0];
    let poolAmounts = allResults[1];
    this.props.newCommissionRates(commissionRates, dividends, podium, poolAmounts);
  };

  render () {
    const { poolOptions, commissionRates } = this.props;
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


export default CommissionRates;
