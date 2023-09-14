/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n\t#graphql\n\tmutation CreateTweet($payload: CreateTweetData!) {\n\t\tcreateTweet(payload: $payload) {\n\t\t\tid\n\t\t}\n\t}\n": types.CreateTweetDocument,
    "\n  #graphql\n  mutation followUser($to: ID!) {\n    followUser(to: $to)\n  }\n": types.FollowUserDocument,
    "\n  #graphql\n  mutation unfollowUser($to: ID!) {\n    unfollowUser(to: $to)\n  }\n": types.UnfollowUserDocument,
    "\n  #graphql\n  query getAllTweets {\n    getAllTweets {\n      id\n      content\n      imgUrl\n      author {\n        id\n        firstName\n        lastName\n        profileImgUrl\n      }\n      likes {\n        liker {\n          id\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n": types.GetAllTweetsDocument,
    "\n  #graphql\n  query getTweetImgPresignedUrl($imgType: String!, $imgName: String!) {\n    getTweetImgPresignedUrl(ImgType: $imgType, ImgName: $imgName)\n  }\n": types.GetTweetImgPresignedUrlDocument,
    "\n  #graphql\n  query VerifyUserGoogleTokenQuery($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n": types.VerifyUserGoogleTokenQueryDocument,
    "\n  #graphql\n  query getCurrentUser {\n    getCurrentUser {\n      id\n      firstName\n      lastName\n      email\n      profileImgUrl\n      tweets {\n        id\n        content\n        imgUrl\n        author {\n          firstName\n          lastName\n          profileImgUrl\n        }\n      }\n      followers {\n        firstName\n        lastName\n        id\n      }\n      following {\n        firstName\n        lastName\n        id\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  #graphql\n  query getUserByID($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      firstName\n      lastName\n      profileImgUrl\n      tweets {\n        id\n        content\n        imgUrl\n        author {\n          id\n          firstName\n          lastName\n          profileImgUrl\n        }\n      }\n      followers {\n        firstName\n        lastName\n        id\n      }\n      following {\n        firstName\n        lastName\n        id\n      }\n    }\n  }\n": types.GetUserByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t#graphql\n\tmutation CreateTweet($payload: CreateTweetData!) {\n\t\tcreateTweet(payload: $payload) {\n\t\t\tid\n\t\t}\n\t}\n"): (typeof documents)["\n\t#graphql\n\tmutation CreateTweet($payload: CreateTweetData!) {\n\t\tcreateTweet(payload: $payload) {\n\t\t\tid\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation followUser($to: ID!) {\n    followUser(to: $to)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation followUser($to: ID!) {\n    followUser(to: $to)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation unfollowUser($to: ID!) {\n    unfollowUser(to: $to)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation unfollowUser($to: ID!) {\n    unfollowUser(to: $to)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getAllTweets {\n    getAllTweets {\n      id\n      content\n      imgUrl\n      author {\n        id\n        firstName\n        lastName\n        profileImgUrl\n      }\n      likes {\n        liker {\n          id\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query getAllTweets {\n    getAllTweets {\n      id\n      content\n      imgUrl\n      author {\n        id\n        firstName\n        lastName\n        profileImgUrl\n      }\n      likes {\n        liker {\n          id\n          firstName\n          lastName\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getTweetImgPresignedUrl($imgType: String!, $imgName: String!) {\n    getTweetImgPresignedUrl(ImgType: $imgType, ImgName: $imgName)\n  }\n"): (typeof documents)["\n  #graphql\n  query getTweetImgPresignedUrl($imgType: String!, $imgName: String!) {\n    getTweetImgPresignedUrl(ImgType: $imgType, ImgName: $imgName)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query VerifyUserGoogleTokenQuery($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n"): (typeof documents)["\n  #graphql\n  query VerifyUserGoogleTokenQuery($token: String!) {\n    verifyGoogleToken(token: $token)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getCurrentUser {\n    getCurrentUser {\n      id\n      firstName\n      lastName\n      email\n      profileImgUrl\n      tweets {\n        id\n        content\n        imgUrl\n        author {\n          firstName\n          lastName\n          profileImgUrl\n        }\n      }\n      followers {\n        firstName\n        lastName\n        id\n      }\n      following {\n        firstName\n        lastName\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query getCurrentUser {\n    getCurrentUser {\n      id\n      firstName\n      lastName\n      email\n      profileImgUrl\n      tweets {\n        id\n        content\n        imgUrl\n        author {\n          firstName\n          lastName\n          profileImgUrl\n        }\n      }\n      followers {\n        firstName\n        lastName\n        id\n      }\n      following {\n        firstName\n        lastName\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query getUserByID($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      firstName\n      lastName\n      profileImgUrl\n      tweets {\n        id\n        content\n        imgUrl\n        author {\n          id\n          firstName\n          lastName\n          profileImgUrl\n        }\n      }\n      followers {\n        firstName\n        lastName\n        id\n      }\n      following {\n        firstName\n        lastName\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query getUserByID($id: ID!) {\n    getUserById(id: $id) {\n      id\n      email\n      firstName\n      lastName\n      profileImgUrl\n      tweets {\n        id\n        content\n        imgUrl\n        author {\n          id\n          firstName\n          lastName\n          profileImgUrl\n        }\n      }\n      followers {\n        firstName\n        lastName\n        id\n      }\n      following {\n        firstName\n        lastName\n        id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;