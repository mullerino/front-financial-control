import React, { useState } from 'react'
import {
  SolutionOutlined,
  PieChartOutlined,
  UserOutlined
} from '@ant-design/icons'

import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Sider } = Layout

function getItem(label, key, icon, route) {
  return {
    key,
    icon,
    label,
    route
  }
}

const items = [
  getItem('Histórico', '1', <PieChartOutlined />, '/'),
  getItem('Detalhamento', '2', <SolutionOutlined />, '/registered-users'),
  getItem('Pessoas cadastradas', '3', <UserOutlined />, '/users')
]

const MenuCollapsed = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items.map((item) => (
        {
          key: item.key,
          icon: item.icon,
          label: <Link to={item.route}>{item.label}</Link>,
        }
      ))} />
    </Sider>
  )
}

export default MenuCollapsed 
