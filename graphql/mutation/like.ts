import { graphql } from "@/gql";

export const likeTweetMutation = graphql(`
  #graphql
  mutation LikeTweet($payload: LikeUnlikeTweetData!) {
    likeTweet(payload: $payload) {
      id
      content
      imgUrl
      author {
        id
        firstName
        lastName
        profileImgUrl
      }
      likes {
        liker {
          id
          firstName
          lastName
        }
      }
    }
  }
`);
export const unLikeTweetMutation = graphql(`
  #graphql
  mutation UnlikeTweet($payload: LikeUnlikeTweetData!) {
    unlikeTweet(payload: $payload) {
      id
      content
      imgUrl
      author {
        id
        firstName
        lastName
        profileImgUrl
      }
      likes {
        liker {
          id
          firstName
          lastName
        }
      }
    }
  }
`);
