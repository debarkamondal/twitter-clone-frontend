import { graphql } from "@/gql";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query VerifyUserGoogleTokenQuery($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(`
  #graphql
  query getCurrentUser {
    getCurrentUser {
      id
      firstName
      lastName
      email
      profileImgUrl
      tweets {
        id
        content
        imgUrl
        author {
          firstName
          lastName
          profileImgUrl
        }
      }
    }
  }
`);
