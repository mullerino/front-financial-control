import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/home"
import Summary from "./pages/Summary/summary"
import Historic from "./pages/Historic/historic"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users" element={<Historic/>}></Route>
        <Route path="/summary" element={<Summary/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
