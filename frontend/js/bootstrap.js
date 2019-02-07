export const baseUrl = "http://m.test"



window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
window.axios.default.baseUrl = baseUrl

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
   window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
   console.error('CSRF token not found!');
}

