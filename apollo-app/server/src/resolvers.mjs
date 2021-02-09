import { PubSub } from 'apollo-server-express';

const pubSub = new PubSub();

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo!';
    },
  },
};
