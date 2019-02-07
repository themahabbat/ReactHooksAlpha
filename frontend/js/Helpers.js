
export function initialize() {

   if (localStorage.getItem('access_token')) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`

      axios.get('/api/user')
         .then(response => {
            window.axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
            dispatch({ type: 'authenticate', token: localStorage.getItem('access_token') })
            dispatch({ type: 'getUser', data: response.data })
            dispatch({ type: 'initialized' })
         })
         .catch(error => {
            console.error(error)
            axios.defaults.headers.common['Authorization'] = null
            dispatch({ type: 'initialized' })
         })

   }
   else dispatch({ type: 'initialized' })




}

export function login(credentials, successCallback = null, errorCallback = null) {

   axios.post('/login', credentials)
      .then(response => {

         const auth = `Bearer ${response.data.access_token}`

         axios.defaults.headers.common['Authorization'] = auth;

         dispatch({ type: 'authenticate', token: response.data.access_token })

         localStorage.setItem('access_token', response.data.access_token)

         getUserData()

         if (successCallback) successCallback();

      })
      .catch(error => {
         if (errorCallback) errorCallback(error.response.data)
         else console.error(error)
      })

}

export function getUserData() {

   axios.get('/api/user')
      .then(response => {
         dispatch({ type: 'getUser', data: response.data })
      })
      .catch(error => console.error(error))

}

export function logout() {

   if (state.auth !== null) {

      axios.post('/logout')
         .then(response => {
            dispatch({ type: 'logout' })
            localStorage.removeItem('access_token')
         })
         .catch(error => {
            console.log(error)
         })

   }

}

export function metaHelper(meta) {

   if ((meta == 'auth' && state.auth) || (meta == 'guest' && !state.auth) || (!meta)) return true;
   else return false;

}
