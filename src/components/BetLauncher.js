import React from 'react';
import { Step, Stepper, StepButton } from 'material-ui/Stepper';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

injectTapEventPlugin();

class BetLauncher extends React.Component {
  state = {
    stepIndex: 0,
    next: "Next"
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
    if (stepIndex === 1) {
      this.setState({next: "Finished"});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: 0, next: "Next"});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <p>Would you like to start a new race?</p>;
      case 1:
        return  <TextField
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

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
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
