import { PubSub } from 'apollo-server-express';

import fetch from 'node-fetch';

const pubSub = new PubSub();

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo!';
    },
    authors() {
      return fetch('http://localhost:5050/authors').then((res) => res.json());
    },
    books() {
      return fetch('http://localhost:5050/books').then((res) => res.json());
    },
  },
};
