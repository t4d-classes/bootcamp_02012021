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
    author(_, args) {
      return fetch(
        'http://localhost:5050/authors/' + encodeURIComponent(args.authorId),
      ).then((res) => res.json());
    },
    filteredBooks(_, args) {
      return fetch(
        'http://localhost:5050/books?' +
          encodeURIComponent(args.fieldName) +
          '=' +
          encodeURIComponent(args.fieldValue),
      ).then((res) => res.json());
    },
  },
  Mutation: {
    appendAuthor(_, args) {
      return fetch('http://localhost:5050/authors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.author),
      }).then((res) => res.json());
    },
    appendBook(_, args) {
      return fetch('http://localhost:5050/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(args.book),
      }).then((res) => res.json());
    },
    removeBook(_, args) {
      return fetch(
        'http://localhost:5050/books/' + encodeURIComponent(args.bookId),
      ).then((res) => res.json())
      .then(book => {
        return fetch(
          'http://localhost:5050/books/' + encodeURIComponent(args.bookId),
          { method: 'DELETE' },
        ).then(() => book);
      });
    },
  },
};
