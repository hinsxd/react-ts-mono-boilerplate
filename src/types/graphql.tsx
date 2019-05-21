/* eslint-disable */

export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  addUser: User;
  deleteUser: Scalars["Boolean"];
};

export type MutationAddUserArgs = {
  email: Scalars["String"];
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type Query = {
  users: Array<User>;
};

export type User = {
  id: Scalars["ID"];
  email: Scalars["String"];
};
export type AddUserMutationVariables = {
  email: Scalars["String"];
};

export type AddUserMutation = { __typename?: "Mutation" } & {
  addUser: { __typename?: "User" } & Pick<User, "id" | "email">;
};

export type DeleteUserMutationVariables = {
  id: Scalars["ID"];
};

export type DeleteUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "deleteUser"
>;

export type UsersQueryVariables = {};

export type UsersQuery = { __typename?: "Query" } & {
  users: Array<{ __typename?: "User" } & Pick<User, "id" | "email">>;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const AddUserDocument = gql`
  mutation AddUser($email: String!) {
    addUser(email: $email) {
      id
      email
    }
  }
`;
export type AddUserMutationFn = ReactApollo.MutationFn<
  AddUserMutation,
  AddUserMutationVariables
>;

export const AddUserComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<AddUserMutation, AddUserMutationVariables>,
      "mutation"
    >,
    "variables"
  > & { variables?: AddUserMutationVariables }
) => (
  <ReactApollo.Mutation<AddUserMutation, AddUserMutationVariables>
    mutation={AddUserDocument}
    {...props}
  />
);

export function useAddUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AddUserMutation,
    AddUserMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    AddUserMutation,
    AddUserMutationVariables
  >(AddUserDocument, baseOptions);
}
export const DeleteUserDocument = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
export type DeleteUserMutationFn = ReactApollo.MutationFn<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

export const DeleteUserComponent = (
  props: Omit<
    Omit<
      ReactApollo.MutationProps<
        DeleteUserMutation,
        DeleteUserMutationVariables
      >,
      "mutation"
    >,
    "variables"
  > & { variables?: DeleteUserMutationVariables }
) => (
  <ReactApollo.Mutation<DeleteUserMutation, DeleteUserMutationVariables>
    mutation={DeleteUserDocument}
    {...props}
  />
);

export function useDeleteUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >(DeleteUserDocument, baseOptions);
}
export const UsersDocument = gql`
  query Users {
    users {
      id
      email
    }
  }
`;

export const UsersComponent = (
  props: Omit<
    Omit<ReactApollo.QueryProps<UsersQuery, UsersQueryVariables>, "query">,
    "variables"
  > & { variables?: UsersQueryVariables }
) => (
  <ReactApollo.Query<UsersQuery, UsersQueryVariables>
    query={UsersDocument}
    {...props}
  />
);

export function useUsersQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<UsersQueryVariables>
) {
  return ReactApolloHooks.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    baseOptions
  );
}
