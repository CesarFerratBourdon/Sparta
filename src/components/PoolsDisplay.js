import React, { Component } from 'react';
import Pool from './Pool'
import Paper from 'material-ui/Paper';


class PoolsDisplay extends Component {

  render () {
    const style = {
      height: 110,
      width: 150,
      margin: 40,
      textAlign: 'center',
      display: 'inline-block',
    };

    const { poolOptions, poolAmounts } = this.props;

    return (
          <div style={{width: '100%', maxWidth: 940, margin: 'auto'}}>
            <Paper style={style} zDepth={2} circle={true}><Pool title={poolOptions[0]} amount={poolAmounts[0]}/></Paper>
            <Paper style={style} zDepth={2} circle={true}><Pool title={poolOptions[1]} amount={poolAmounts[1]}/></Paper>
            <Paper style={style} zDepth={2} circle={true}><Pool title={poolOptions[2]} amount={poolAmounts[2]}/></Paper>
            <Paper style={style} zDepth={2} circle={true}><Pool title={poolOptions[3]} amount={poolAmounts[3]}/></Paper>
          </div>
    )
  }
};

export default PoolsDisplay;
