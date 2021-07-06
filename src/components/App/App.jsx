import React, { Component } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

import { Container } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementFeedback = e => {
    const name = e.target.closest('button').name;

    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  getTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b);
  };

  getPositivePercentage = () => {
    const total = this.getTotalFeedback();
    const { good } = this.state;

    return total !== 0 ? `${Math.round((good / total) * 100)}%` : `0%`;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const isFeedbacks = this.getTotalFeedback() > 0;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrementFeedback}
          />
        </Section>

        <Section title="Statistics">
          {isFeedbacks ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.getTotalFeedback()}
              positivePercentage={this.getPositivePercentage()}
            />
          ) : (
            <Notification text="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}
