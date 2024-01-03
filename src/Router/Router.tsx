import React from "react"
import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/SignupPage"
import Home from "../pages/Home"

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default Router
