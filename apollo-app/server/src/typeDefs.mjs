import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    authors: [Author]
    books: [Book]
    author(authorId: ID): Author
    filteredBooks(fieldName: String, fieldValue: String): [Book]
  }

  type Mutation {
      appendAuthor(author: NewAuthor): Author
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: String
  }

  input NewAuthor {
    firstName: String
    lastName: String
    phoneNumber: String
  }

  type Book {
    id: ID
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  }
`;
