#### Installed Packages

## - express

## - apollo-server-express

## - graphql

## - type-graphql

## - reflect-metadata ---> reflect-metra is a library that we need for type-graphql

## - pg ---> postgres

## - typeorm ---> database orm( Object–relational mapping )

## - bcryptjs ---> hashing password

## - classs-validator ---> validating the graphql input using decorators ( decorators starts @)

## - express-session

## - connect-redis

## - ioredis

## - cors

#### Development Dependencies

## - @types/express

## - @types/graphql

## - @types/node

## - nodemon

## - ts-node

## - typescript

## - ts-node-dev ---> for faster loading whenever file changes

## - @types/express-session

## - @types/connect-redis

## - @types/cors

## - @types/ioredis

@Errors

- Problems loading reference 'https://json.schemastore.org/tsconfig
  Solution : Restarting Vscode
- Problem: Graphql playground will not show in apollo-server-express version 3
  Solution: https://www.apollographql.com/docs/apollo-server/testing/build-run-queries/#graphql-playground

- Problem: Class validation in type graphql does not work
  Solution: I forget to turn true the validator in build schema

- Problem: [ioredis] Unhandled error event: Error: connect ECONNREFUSED 127.0.0.1:6379 #369
  Solution: Forget to run the redis server

- Problem: qid or the session cannot be seen in the browser
  Solution: change the "request.credentials" from "omit" to "include" from localhost:4001/graqhql settings

- Proble: Shouldn't the login be a Query in GraphQL?
  Solution: https://stackoverflow.com/questions/50189364/shouldnt-the-login-be-a-query-in-graphql

@Infos

- Typeorm types :
  https://github.com/typeorm/typeorm/blob/master/test/functional/database-schema/column-types/postgres/entity/Post.ts
