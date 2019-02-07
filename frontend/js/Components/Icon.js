import React from 'react'

export function Icon(props) {
   let className = ''

   className += `fa${props.type} fa-${props.icon}`

   if (props.size) className += `fa-${props.size}`


   return (
      <i className={className}></i>
   )

}
