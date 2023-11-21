import RegisterPerson from "../../components/registerPerson"
import DataTable from "../../components/table"

import style from "./style.module.css"
import axios from 'axios'

import { useEffect, useState } from "react"

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
    if (data) {
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
    <>
      <div className={style.headerPage}>
        <h1>Pessoas cadastradas</h1>
        <RegisterPerson />
      </div>
      <div className={style.tableData}>
        <DataTable columns={columns} data={buildDataToTable(data)} />
      </div>
    </>
  )
}

export default Historic
