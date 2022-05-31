const gql = require('graphql-tag');

exports.typeDefs = gql`
  type Query {
    getPost: [Post!]
  }
  type Post {
    id: ID!
    body: String!
    userName: String!
    createdAt: String!
  }
  type Mutation {
    register(registerInput: RegisterInput!): User!
    login(userName: String!, password: String!): User!
  }
  input RegisterInput {
    userName: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type User {
    id: ID!
    email: String!
    userName: String!
    createdAt: String!
    token: String!
  }
`;
