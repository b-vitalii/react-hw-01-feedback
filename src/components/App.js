import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import './App.css';



export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedaback = () => {
    return Object.values(this.state).reduce(
      (prevState, nextState) => prevState + nextState,
    );
  };

  positiveFeedback = (total, good) => {
    let percent = ((good / total) * 100).toFixed(2);
    return percent;
  };

  leaveFeedback = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  render({ good, bad, neutral} = this.state) {
    
    let total = this.totalFeedaback();
    let positivePercentage = this.positiveFeedback(total, this.state.good);

    return (
      <div className="App">
        <Section title={'Please leave feeaback'}>
          <Feedback feedback={this.leaveFeedback} />
        </Section>

        <Section title={'Statistic'}>
          {total > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
          `No feedback`
          )}
        </Section>
      </div>
    );
  }
}
