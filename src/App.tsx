import React from "react"
import "./App.css"
import Router from "./Router/Router"
import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "react-query"
import { queryClient } from "./api"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
