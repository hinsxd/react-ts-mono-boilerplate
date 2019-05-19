import { gql } from 'apollo-boost';

export const DELETE_USER_QUERY = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
