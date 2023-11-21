import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Layout } from 'antd'

import Historic from "./pages/Historic/historic"
import Home from "./pages/home/home"
import Summary from "./pages/Summary/summary"

import MenuCollapsed from "./components/menuCollapsed"

const { Content, Footer } = Layout

const AppRoutes = () => {
  return (
    <Router>
      <Layout
        className="layout"
      >
        <MenuCollapsed />
        <Layout>
          <Content
            className="content"
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/users" element={<Historic />}></Route>
              <Route path="/summary" element={<Summary />}></Route>
            </Routes>
          </Content>
          <Footer
            className="footer"
          >
            ELETREQ ©2023 Created by Leandro Müller
          </Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

export default AppRoutes
