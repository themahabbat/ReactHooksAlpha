import React, { useContext } from 'react'
import {
   Route,
   Redirect
} from 'react-router-dom'

import { namedRoute } from "./Helpers";


export function CustomRoute({ path, component, meta, ...rest }) {

   if (!meta) {
      return (<Route path={path} component={component} {...rest} />)
   }
   else {

      if (meta == 'auth') {
         if (state.auth) return (<Route path={path} component={component} {...rest} />)
         else return (<Route path={path} render={() => (<Redirect to={{ pathname: namedRoute('auth.signin'), from: path }} />)} />)
      }
      else if (meta == 'guest') {
         if (!state.auth) return (<Route path={path} component={component} {...rest} />)
         else return (<Route path={path} render={() => (<Redirect to={{ pathname: namedRoute('home'), from: path }} />)} />)
      }

   }

}
