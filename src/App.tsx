import React from "react"
import "./App.css"
import Router from "./Router/Router"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./api"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
