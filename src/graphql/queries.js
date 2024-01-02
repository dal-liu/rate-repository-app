import { gql } from '@apollo/client';

import { REPOSITORY_DETAILS } from './fragments';

export const REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;

export const REPOSITORY = gql`
  query getRepository($id: ID!) {
    repository(id: $id) {
      ...RepositoryDetails
    }
  }
  ${REPOSITORY_DETAILS}
`;
