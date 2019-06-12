var express = require('express');
const { ApolloServer } =  require('apollo-server-express');
const schema = require("./graphql/schema/index")
const resolvers =require("./graphql/resolver/index")

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});