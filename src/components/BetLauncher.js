import React, { Component } from 'react';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import { parseInput, calculateDividends } from '../helpers/utilities'

injectTapEventPlugin();

class BetLauncher extends Component {
  state = {
    stepIndex: 0,
    next: "Next",
    open: false
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    const { commissionRates } = this.props;
    if (stepIndex === 1) {
      let input = this.refs.myField.getValue();
      if (this.handleInputFormat(input) === "Wrong format") {
        this.setState({open: true});
        this.setState({stepIndex: 0});
        this.props.handleRaceReset();
        return;
      };
      this.setState({stepIndex: stepIndex + 1, next: "Finished" });
      let podium = parseInput(input);
      let allResults = calculateDividends(podium, commissionRates);
      let dividends = allResults[0];
      let poolAmounts = allResults[1];
      this.props.handleNewRaceResults(dividends, podium, poolAmounts);
    }
    if (stepIndex === 0) {
      this.setState({stepIndex: 1});
    }
  };

  handleModalClose = () => {
   this.setState({open: false});
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: 0, next: "Next"});
    }
    this.props.handleRaceReset();
  };

  handleInputFormat = (input) => {
    console.log(input);
    if (input.match(/^R:\d:\d:\d$/) === null) {
      return "Wrong format";
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <p>Would you like to start a new race?</p>;
      case 1:
        return  <TextField
            ref="myField"
            hintText="Set the results using correct format"
            floatingLabelText="R:r1:r2:r3"
            floatingLabelFixed={true}
            errorText="This field is required"
          />
      case 2:
        return <p>See below all the dividends paid</p>;
      default:
        return 'Race';
    }
  }

  render() {
    const {stepIndex, next} = this.state;
    const contentStyle = {margin: '0px 200px'};
    const action = [<FlatButton label="Restart" primary={true} onTouchTap={this.handleModalClose}/>]

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
      <Dialog title="Warning" actions={action} modal={true} open={this.state.open}>Wrong format of input</Dialog>
        <Stepper linear={false} activeStep={stepIndex}>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Start a new race
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Race results
            </StepButton>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Dividends paid
            </StepButton>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {this.getStepContent(stepIndex)}
          <div style={{marginTop: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              label={next}
              disabled={stepIndex === 2}
              primary={true}
              onTouchTap={this.handleNext}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BetLauncher;
