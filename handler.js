const dynamoClient = require('./config/awsConfig');

module.exports.read = (event, context, callback) => {
    const params = {
      TableName: process.env.DYNAMODB_TABLE
    }
    dynamoClient.scan(params, (error, result) => {
      if (error) {
        console.error(error)
        callback(null, {
          statusCode: error.statusCode || 501,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Couldn\'t fetch the todos.'
        })
        return
      }
      const response = {
        statusCode: 200,
        body: JSON.stringify(result.Items)
      }
      callback(null, response)
    })
  }