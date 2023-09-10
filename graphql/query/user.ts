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
      followers {
        firstName
        lastName
        id
      }
      following {
        firstName
        lastName
        id
      }
    }
  }
`);

export const getUserByIdQuery = graphql(`
  #graphql
  query getUserByID($id: ID!) {
    getUserById(id: $id) {
      id
      email
      firstName
      lastName
      profileImgUrl
      tweets {
        id
        content
        imgUrl
        author {
          id
          firstName
          lastName
          profileImgUrl
        }
      }
      followers {
        firstName
        lastName
        id
      }
      following {
        firstName
        lastName
        id
      }
    }
  }
`);
