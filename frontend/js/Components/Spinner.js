import React from 'react'

export function Spinner(props) {

   let additional = ''

   if (props.small) additional += ' small'
   else if (props.large) additional += ' large'

   return (
      <div className={`spinner${additional}`}></div>
   )

}
