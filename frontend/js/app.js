import React, {
   useReducer
} from 'react'

import ReactDOM from 'react-dom'

import {
   BrowserRouter as Router,
   Switch,
} from 'react-router-dom'

import { initialState } from './Store/State'
import { Reducer } from './Store/Reducers'

import { routes } from './Routes'
import { CustomRoute } from './CustomRoute'

import { initialize } from './Helpers'

import Navbar from "./Components/Navbar";



require('./bootstrap')

export function App() {

   const [state, dispatch] = useReducer(Reducer, initialState)
   window.state = state
   window.dispatch = dispatch

   if (!state.initialized) {
      initialize()

      return (
         <div id="preloader">
            Loading...
         </div>
      )
   }

   else return (
      <Router>
         <Navbar />
         <Switch>
            {routes.map((route, index) => {
               let meta = null
               if ('meta' in route) meta = route.meta
               return <CustomRoute path={route.path} meta={meta} exact={route.exact} component={route.component} key={index} />
            })}
         </Switch>
      </Router>
   )
}

if (document.getElementById('app')) {
   ReactDOM.render(<App />, document.getElementById('app'));
}
