import React from 'react'

import { Icon } from "./Icon";

export function Alert(props) {
   let additional = ''

   if (props.small) additional += ' small'
   else if (props.large) additional += ' large'

   if (props.type) additional += ` ${props.type}`


   return (props.message) ? (
      <div className={`alert${additional} `}>

         <div className="message">{props.message}</div>

         <button className="close" onClick={props.onDismiss}>
            <Icon type="s" icon="times" />
         </button>

      </div>
   ) : (<React.Fragment></React.Fragment>)

}
