import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/SignupPage"

function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<LoginPage />} /> */}
      <Route path="/" element={<RegisterPage />} />
    </Routes>
  )
}

export default Router
