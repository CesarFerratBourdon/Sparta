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
            <Paper style={style} zDepth={2} ><i>&nbsp;&nbsp;&nbsp;Win Runner {podium[0]}</i><p><b>$ {dividends[0]}</b></p></Paper>
            <Paper style={style} zDepth={2} ><i>Place Runner {podium[0]}</i><p><b>$ {dividends[1]}</b></p></Paper>
            <Paper style={style} zDepth={2} ><i>Place Runner {podium[1]}</i><p><b>$ {dividends[2]}</b></p></Paper>
            <Paper style={style} zDepth={2} ><i>Place Runner {podium[2]}</i><p><b>$ {dividends[3]}</b></p></Paper>
            <Paper style={style} zDepth={2} ><i>Exact Runners {podium[0]},{podium[1]}</i><p><b>$ {dividends[4]}</b></p></Paper>
            <Paper style={style} zDepth={2} ><i>Quinella Runners {podium[0]},{podium[1]}</i><p><b>$ {dividends[5]}</b></p></Paper>
          </div>
    )
  }
};

export default DividendsDisplay;
