import MenuCollapsed from "../../components/menuCollapsed"
import DataTable from "../../components/table"
import { Layout } from 'antd'

import style from './style.module.css'
import RegisterPerson from "../registerPerson"

const { Content, Footer } = Layout

const Home = () => {
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
            <h1>Histórico</h1>
            <RegisterPerson/>
          </div>
          <div className={style.table}>
            <DataTable />
          </div>
        </Content>
        <Footer
          className={style.footer}
        >
          EletrEQ ©2023 Created by Leandro Müller
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Home
