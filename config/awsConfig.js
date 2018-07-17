const AWS = require('aws-thin-dynamo');
let options = {};

if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8001'
  }
}

const client = AWS(options);
module.exports = client;