import { gql } from 'apollo-boost';

export const ADD_USER_QUERY = gql`
  mutation AddUser($email: String!) {
    addUser(email: $email) {
      id
      email
    }
  }
`;
