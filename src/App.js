import React, { Component } from 'react';
import BetLauncher from './components/BetLauncher'
import PoolsDisplay from './components/PoolsDisplay'
import CommissionRates from './components/CommissionRates'
import DividendsDisplay from './components/DividendsDisplay'

class App extends Component {
  constructor() {
    super();
    this.state = {
      poolAmounts: [],
      commissionRates: [15,12,18,18],
      poolOptions: [ 'Win', 'Place', 'Exact', 'Quinella'],
      podium: [],
      showDividends: 'none',
      dividends: []
    }
  }
  handleNewRaceResults = (dividends, podium, poolAmounts) => {
    console.log("hello")
   this.setState({
     podium: podium,
     dividends: dividends,
     poolAmounts: poolAmounts,
     showDividends: 'block',
   });
  }
  handleRaceReset = () => {
    console.log("reset")
   this.setState({
     poolAmounts: [],
     podium: [],
     showDividends: 'none',
     dividends: []
   });
  }
  handleNewCommissionRates = (rate, index) => {
    console.log("commission rates updated");
    var rates = this.state.commissionRates;
    rates[index] = rate;
   this.setState({
     commissionRates: rates
   });
  }
  render() {
    const { poolAmounts, commissionRates , poolOptions, podium, showDividends, dividends} = this.state;
    return (
          <div style={{padding: 100}}>
            <PoolsDisplay poolAmounts={poolAmounts} commissionRates={commissionRates} poolOptions={poolOptions}/>
            <CommissionRates commissionRates={commissionRates} poolOptions={poolOptions} newCommissionRates={this.handleNewCommissionRates} />
            <BetLauncher  commissionRates={commissionRates} handleNewRaceResults={this.handleNewRaceResults}
                  handleRaceReset={this.handleRaceReset} />
            <DividendsDisplay podium={podium} showDividends={showDividends} dividends={dividends}/>
          </div>
    );
  }
}

export default App;
