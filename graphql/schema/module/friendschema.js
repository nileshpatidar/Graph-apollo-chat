const { gql } = require('apollo-server-express');

module.exports = gql`
  
    type FriendRequest{
        id:ID
        user_id:String
        friend_id:String
        accept_status:String
    }
    type FriendList{
        id:ID
        username:String
        user_id:String!
        email:String
    }
    extend type Query {
        firendslist : [FriendList]
        getrequest(user_id:String!):[FriendRequest]
        myfriends(user_id:String!):[FriendRequest]
    }
    extend type Mutation {
         sendRequest(user_id:String! friend_id:String!): FriendRequest
    }
`;