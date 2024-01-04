import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation doAuthentication($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation addReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;
