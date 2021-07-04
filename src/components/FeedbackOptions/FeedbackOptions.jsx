import { Row, Col } from 'antd';
import { Button } from 'antd';

export default function FeedbackOptions(props) {
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={3}>
        <Button type="primary" block>
          Good
        </Button>
      </Col>
      <Col className="gutter-row" span={3}>
        <Button block>Neutral</Button>
      </Col>
      <Col className="gutter-row" span={3}>
        <Button type="primary" danger block>
          Bad
        </Button>
      </Col>
    </Row>
  );
}
