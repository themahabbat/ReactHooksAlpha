import React, { useContext } from 'react'
import {
   Route,
   Redirect
} from 'react-router-dom'


export function CustomRoute({ path, component, meta, ...rest }) {

   if (!meta) {
      return (<Route path={path} component={component} {...rest} />)
   }
   else {

      if (meta == 'auth') {
         if (state.auth) return (<Route path={path} component={component} {...rest} />)
         else return (<Route path={path} render={() => (<Redirect to={{ pathname: '/signin', from: path }} />)} />)
      }
      else if (meta == 'guest') {
         if (!state.auth) return (<Route path={path} component={component} {...rest} />)
         else return (<Route path={path} render={() => (<Redirect to={{ pathname: '/', from: path }} />)} />)
      }

   }

}
