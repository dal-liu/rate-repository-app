import { gql } from '@apollo/client';

export const REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          description
          forksCount
          fullName
          id
          language
          ownerAvatarUrl
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
