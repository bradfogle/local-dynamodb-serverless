# local-dynamodb-serverless
## Overview
We've been doing a lot of development recently with AWS Lambda and DynamoDB.  While there are some great tools and frameworks for describing, deploying and monitoring these services to AWS, we didn't have a great / standardized way for working with these solutions locally.

This sample app demonstrates usage of the `serverless-dynamodb-local` and `serverless-offline` Serverless plugins as well as `dynamodb-admin`.

## Quick Start
1. Run `npm install` to pull in all of the necessary dependencies.
2. Run `npm run local` to fire up:
    - A local instance of DynamoDB, running on port 8001, with a table created (named `simplepoll`) & loaded with seed data from the `./seedData/poll.json` file
    - A simple lambda service that reads all data from the `simplepoll` table.  This is a read-only endpoint accessible at http://localhost:3000/poll.
    - A simple DynamoDB console, leveraging the `dynamodb-admin` project (https://github.com/aaronshaf/dynamodb-admin), which can be accessed at http://localhost:8001