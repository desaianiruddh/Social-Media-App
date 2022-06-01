const postsResolver = require('./post');
const usersResolver = require('./user');
const commentsResolver = require('./comments');

module.exports = {
  Query: {
    ...usersResolver.Query,
    ...postsResolver.Query,
  },
  Mutation: {
    ...usersResolver.Mutation,
    ...postsResolver.Mutation,
    ...commentsResolver.Mutation,
  },
  Subscription: {
    ...postsResolver.Subscription,
  },
};
