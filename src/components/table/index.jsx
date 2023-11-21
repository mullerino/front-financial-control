import React from 'react';
import { Space, Table, Tag } from 'antd';

const DataTable = ({columns, data}) => {
  return (
    <Table 
      columns={columns} 
      dataSource={data} 
      pagination={{defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ['5','10', '20']}} 
    />
  )
}

export default DataTable
