import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BetLauncher from './components/BetLauncher'

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <BetLauncher />
        </MuiThemeProvider>
    );
  }
}

export default App;
