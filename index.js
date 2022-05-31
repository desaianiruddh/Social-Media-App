const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const { typeDefs } = require('./GraphQL/schema');
const { MONGO_URL } = require('./config');
const resolvers = require('./GraphQL/resolvers/index');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen();
  })
  .then(({ url }) => {
    console.log('server is ready at', url);
  });
