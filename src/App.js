import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './Layout/Layout'
import List from './Routes/List/List'
import Login from './Routes/Login/Login'

import './App.css'

function App() {

  const state = {
    lists: {
      'Christmas dinner': {
        'Bread': false,
        'Wine': true,
        'Chicken': false
      },
      'Lunch snack': {
        'Sandwich': true,
        'Coca': false
      }
    },
    activeList: 'Christmas dinner'

  }
  // const lists = {
  //   'Christmas dinner': {
  //     'Bread': false,
  //     'Wine': true,
  //     'Chicken': false
  //   },
  //   'Lunch snack': {
  //     'Sandwich': true,
  //     'Coca': false
  //   }
  // }

  if (!localStorage.getItem('lists')) {
    localStorage.setItem('lists', JSON.stringify(state.lists))
    localStorage.setItem('activeList',JSON.stringify(state.activeList) )
  }

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/login" component={Login} />
          {/* <Route path="/" exact component={List} /> */}
          <Route path="/" exact render={(props) => <List {...props} name={state.activeList} />} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
