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

export const getTweetImgPresignedUrlQuery = graphql(`
  #graphql
  query getTweetImgPresignedUrl($imgType: String!, $imgName: String!) {
    getTweetImgPresignedUrl(ImgType: $imgType, ImgName: $imgName)
  }
`);
