import MenuCollapsed from "../../components/menuCollapsed"
import RegisterPerson from "../../components/registerPerson"
import DataTable from "../../components/table"
import { Layout } from 'antd'

import style from "./style.module.css"
import axios from 'axios'

import { useEffect, useState } from "react"

const { Content, Footer } = Layout

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Centro',
    dataIndex: 'center',
    key: 'center',
  }
]

const Historic = () => {
  const [data, setData] = useState()

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/users')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error)
      })
  }, [])

  const buildDataToTable = (data) => {
    if(data) {
      const usersData = data.map(user => {
        return {
          name: user.nome,
          email: user.email,
          center: user.centro
        }
      })

      return usersData
    }

    return []
  }

  return (
    <Layout
      className={style.layout}
    >
      <MenuCollapsed />
      <Layout>
        <Content
          className={style.content}
        >
          <div className={style.headerPage}>
            <h1>Pessoas cadastradas</h1>
            <RegisterPerson />
          </div>
          <div className={style.table}>
            <DataTable columns={columns} data={buildDataToTable(data)} />
          </div>
        </Content>
        <Footer
          className={style.footer}
        >
          ELETREQ ©2023 Created by Leandro Müller
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Historic
