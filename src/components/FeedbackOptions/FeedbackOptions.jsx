import PropTypes from 'prop-types';

import { Row, Col } from 'antd';
import { Button } from 'antd';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Row gutter={16}>
      {options.map(btn => (
        <Col key={`${btn}-btn`} className="gutter-row" span={3}>
          <Button name={btn} block onClick={onLeaveFeedback}>
            {btn}
          </Button>
        </Col>
      ))}
    </Row>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
