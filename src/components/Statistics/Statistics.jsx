import { Table } from 'antd';
import { Row, Col } from 'antd';

import { columns } from './tableColumns';

export default function Statistics(props) {
  const data = [
    {
      key: '1',
      good: 1,
      neutral: 32,
      bad: 13,
      total: 132,
      positiveFeedback: '45%',
    },
  ];

  return (
    <Row>
      <Col span={6}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
      </Col>
    </Row>
  );
}
