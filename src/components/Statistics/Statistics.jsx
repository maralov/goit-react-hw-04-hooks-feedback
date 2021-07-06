import PropTypes from 'prop-types';

import { Table } from 'antd';
import { Row, Col } from 'antd';

import { columns } from './tableColumns';

export default function Statistics(props) {
  const data = [
    {
      key: '1',
      ...props,
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
