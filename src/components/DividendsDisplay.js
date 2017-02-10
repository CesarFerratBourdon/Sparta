import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class DividendsDisplay extends Component {

  render () {
    const style = {
      height: 120,
      width: 120,
      margin: 20,
      backgroundColor: 'grey',
      color: 'white',
      textAlign: 'center',
      display: 'inline-block',
    };

    const { podium, dividends, showDividends } = this.props;

    return (
          <div style={{width: '100%', maxWidth: 1000, margin: 'auto', padding: 80, display: showDividends}}>
            <Paper style={style} zDepth={2} ><i>&nbsp;&nbsp;&nbsp;Win Runner {podium[0]}</i><p>$ {dividends[0]}</p></Paper>
            <Paper style={style} zDepth={2} ><i>Place Runner {podium[0]}</i><p>$ {dividends[1]}</p></Paper>
            <Paper style={style} zDepth={2} ><i>Place Runner {podium[1]}</i><p>$ {dividends[2]}</p></Paper>
            <Paper style={style} zDepth={2} ><i>Place Runner {podium[2]}</i><p>$ {dividends[3]}</p></Paper>
            <Paper style={style} zDepth={2} ><i>Exact Runners {podium[0]},{podium[1]}</i><p>$ {dividends[4]}</p></Paper>
            <Paper style={style} zDepth={2} ><i>Quinella Runners {podium[0]},{podium[1]}</i><p>$ {dividends[5]}</p></Paper>
          </div>
    )
  }
};

export default DividendsDisplay;
