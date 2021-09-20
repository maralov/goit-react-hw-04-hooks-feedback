import React, { useState } from 'react';

import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import { Container } from './App.styled';

const buttonsOption = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementFeedback = name => {
    switch (name) {
      case buttonsOption.bad:
        setBad(bad + 1);
        break;
      case buttonsOption.neutral:
        setNeutral(neutral + 1);
        break;
      case buttonsOption.good:
        setGood(good + 1);
        break;
      default:
        return null;
    }
  };

  const getTotalFeedback = () => {
    return good + neutral + bad;
  };

  const getPositivePercentage = () => {
    const total = getTotalFeedback();

    return total !== 0 ? `${Math.round((good / total) * 100)}%` : `0%`;
  };

  const isFeedbacks = getTotalFeedback() > 0;

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(buttonsOption)}
          onLeaveFeedback={handleIncrementFeedback}
        />
      </Section>

      <Section title="Statistics">
        {isFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={getTotalFeedback()}
            positivePercentage={getPositivePercentage()}
          />
        ) : (
          <Notification text="No feedback given" />
        )}
      </Section>
    </Container>
  );
}
