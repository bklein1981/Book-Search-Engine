import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me($username: String!) {
  _id
  username
  email
  password
  savedBooks {
    authors
    description
    bookId
    image
    link
    title
  }
  bookCount
}
`;