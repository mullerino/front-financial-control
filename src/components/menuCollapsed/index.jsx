import React, { useState } from 'react'
import {
  SolutionOutlined,
  PieChartOutlined,
  UserAddOutlined
} from '@ant-design/icons'

import { Layout, Menu } from 'antd'

const { Sider } = Layout

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  }
}

const items = [
  getItem('Histórico', '1', <PieChartOutlined />),
  getItem('Detalhamento', '2', <SolutionOutlined />),
  getItem('Cadastrar pessoa', '3', <UserAddOutlined />),
]

const MenuCollapsed  = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  )
}

export default MenuCollapsed 
