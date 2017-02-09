import React from 'react';
import Pool from './Pool'
import Paper from 'material-ui/Paper';

const poolOptions = [ 'Win', 'Place', 'Exact', 'Quinella'];

class PoolsDisplay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pool1: poolOptions[0],
      pool2: poolOptions[1],
      pool3: poolOptions[2],
      pool4: poolOptions[3],
    }
  }

  render () {
    const style = {
      height: 110,
      width: 150,
      margin: 40,
      textAlign: 'center',
      display: 'inline-block',
    };
    var amountWin = this.props.amounts[0]
    var amountPlace = this.props.amounts[1]
    var amountExact = this.props.amounts[2]
    var amountQuinella = this.props.amounts[3]

    return (
          <div style={{width: '100%', maxWidth: 940, margin: 'auto'}}>
            <Paper style={style} zDepth={2} circle={true}><Pool title={this.state.pool1} amount={amountWin}/></Paper>
            <Paper style={style} zDepth={2} circle={true}><Pool title={this.state.pool2} amount={amountPlace}/></Paper>
            <Paper style={style} zDepth={2} circle={true}><Pool title={this.state.pool3} amount={amountExact}/></Paper>
            <Paper style={style} zDepth={2} circle={true}><Pool title={this.state.pool4} amount={amountQuinella}/></Paper>
          </div>
    )
  }
};

export default PoolsDisplay;
