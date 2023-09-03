import { graphql } from "@/gql";

export const getAllTweetsQuery = graphql(`
  #graphql
  query getAllTweets {
    getAllTweets {
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
  }
`);
