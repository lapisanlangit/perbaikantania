const axios = require('axios');

axios.defaults.headers.common['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJBcGxpa2FzaSBTUFBEIiwiaWR1c2VyIjoyMCwibmFtYSI6InN1cGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiaGFrIjoiMyIsImtkc2F0a2VyIjoiNDAwNzU3Iiwia2RhbmFrIjoiMDEiLCJrZHN1YmFuYWsiOiIwMSIsImtkbG9rYXNpIjoiMDEiLCJubWthYmtvdGEiOiJKQUtBUlRBICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIiwiaWF0IjoxNTY4NDc3NjIzfQ.3WxwVk1nBX1vdDdYsBwoL8bsIIbZxgBIkVkqODKvCJE';
// Add a request interceptor
axios.interceptors.request.use(function(config) {
    console.log('kirim data')
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    // do something with the response data
    console.log('Response was received');

    return response;
}, error => {
    // handle the response error
    return Promise.reject(error);
});

export default axios;