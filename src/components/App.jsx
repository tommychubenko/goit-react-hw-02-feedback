import { Component } from 'react';
import AdditionalData from './statistics';
import Controls from './controls';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleSetFeddback = name => {
    this.setState(prev => ({
      [name]: prev[name] + 1,
    }));
  };

  render() {
    return (
      <div>
        <Controls
          buttons={this.state}
          handleSetFeddback={this.handleSetFeddback}
        />
        <AdditionalData props={this.state} />
      </div>
    );
  }
}

export const App = () => {
  return (
    <div>
      <Feedback />
    </div>
  );
};
