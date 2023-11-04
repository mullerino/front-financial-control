import MenuCollapsed from "../components/menuCollapsed"
import DataTable from "../components/table"
import { Layout } from 'antd'

import styles from './styles.module.css'

const { Content, Footer } = Layout

const Home = () => {
  return (
    <Layout
      className={styles.layout}
    >
      <MenuCollapsed />
      <Layout>
        <Content
          className={styles.content}
        >
          <div className={styles.table}>
            <DataTable />
          </div>
        </Content>
        <Footer
          className={styles.footer}
        >
          EletrEQ ©2023 Created by Leandro Müller
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Home
