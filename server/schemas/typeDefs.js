const typeDefs = `
type Book {
  authors:[String]
  description: String!
  bookId: String!
  image: String!
  link: String!
  title: String!
}

type User {
  _id: ID!
  username: String!
  email: String!
  password: String!
  savedBooks:[Book]
  bookCount: Int
}

type Auth {
  token: ID!
  user: User
}

input BookInput {
  authors:[String]
  description: String!
  bookId: String!
  image: String!
  link: String!
  title: String!
}

type Query {
me(username: String!): User
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String! password: String!): Auth
  saveBook(username: String!, newBook: BookInput!): User
  removeBook(bookId: String!): User
}
`;

module.exports = typeDefs;