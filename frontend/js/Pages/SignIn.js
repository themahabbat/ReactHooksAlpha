import React, { useState } from 'react'

import { login } from '../Helpers'

import { Spinner } from '../Components/Spinner'

import { Alert } from "../Components/Alert";

export default function SignIn(props) {

   const [loading, setLoading] = useState(false)

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const [error, setError] = useState('')

   if (props.location.from && !error) setError('You have to sign in to view that page!')

   function signIn() {
      setLoading(true)

      login({ email, password }, () => {
         if (props.location.from) props.history.push(props.location.from)
         else props.history.push('/')
      }, (error) => {
         setError(error.error)
         setLoading(false)
      })

   }

   return (
      <div className="container">
         <div className="grid">

            <Alert message={error} onDismiss={() => setError('')} />


            <div className="form-grid">
               <label>Email</label>
               <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

               <label>Password</label>
               <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="primary hasSpinner" disabled={loading} type="submit" onClick={signIn}>
               {loading ? (<Spinner />) : ('')}
               <span>Sign in</span>
            </button>

         </div>
      </div>
   )

}

