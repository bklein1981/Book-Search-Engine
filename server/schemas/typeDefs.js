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
}

type Query {

}

type Mutation {
  
}
`;

module.exports = typeDefs;