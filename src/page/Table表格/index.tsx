import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: React.Key;
  name: string;
  answer: any;
  time: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 400,
  },
  {
    title: 'Answer',
    dataIndex: 'answer',
    width: 400,
  },
  {
    title: 'Time',
    dataIndex: 'time',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    answer:`旭东真帅`,
    time: `2022-1-1 ${i}`,
  });
}

const Table1: React.FC = () => (
  <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{ y: 440 }} />
);

export default Table1;