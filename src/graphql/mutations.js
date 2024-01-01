import { gql } from '@apollo/client';

export const AUTHENTICATE = gql`
  mutation doAuthentication($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;
