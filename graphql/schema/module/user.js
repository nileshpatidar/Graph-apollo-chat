const { gql } = require('apollo-server-express');

module.exports = gql`
    type User { 
        id : ID
        username:String
        email: String
        password:String
        phone:Int
    }
    extend type Query {
        users : [User]
        login(email: String! password: String!): User!
    }
    extend type Mutation {
        createUser(email: String! password: String! phone:Int! username:String!): User!
    }
`;