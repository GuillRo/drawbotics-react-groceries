import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './Layout/Layout'
import List from './Routes/List/List'
import Login from './Routes/Login/Login'

import './App.css'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={List} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
