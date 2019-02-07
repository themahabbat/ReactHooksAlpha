export const Reducer = (state, action) => {
   switch (action.type) {

      case 'authenticate':
         return {
            ...state,
            auth: action.token
         }

      case 'getUser':
         return {
            ...state,
            user: action.data
         }

      case 'logout':
         return {
            ...state,
            auth: null,
            user: null
         }

      case 'initialized':
         return {
            ...state,
            initialized: true
         }

      default:
         return state;
   }
}
