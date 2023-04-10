const http = require('http');

const options = {
  host: 'localhost',
  port : 3000,
  path: '/api/addresses',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

http.get(options, (response) => {
  let body = '';
  response.on('data', (chunk) => {
    body += chunk;
  });
  response.on('end', () => {
    console.log('Response from API:', body);
  });
}).on('error', (error) => {
  console.error('Error making request to API:', error);
});
