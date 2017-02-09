import React, { Component } from 'react';
import BetLauncher from './components/BetLauncher'
import PoolsDisplay from './components/PoolsDisplay'

class App extends Component {
  constructor() {
    super();
    this.state = {
      amounts: []
    }
  }

  handleNewRaceResults(allTotal) {
    console.log("hello")
   this.setState({
     amounts: allTotal
   });
  }

  handleRaceReset() {
    console.log("reset")
   this.setState({
     amounts: []
   });
  }

  render() {
    const {amounts} = this.state;
    return (
      <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <PoolsDisplay amounts={amounts}/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <BetLauncher updateTotalPools={(e) => this.handleNewRaceResults(e)}
                raceReset={(e) => this.handleRaceReset(e)} />
                </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                </div>
            </div>
      </div>
    );
  }
}

export default App;
