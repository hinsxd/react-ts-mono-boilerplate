import { gql } from 'apollo-boost';

export const USERS_QUERY = gql`
  query Users {
    users {
      id
      email
    }
  }
`;
