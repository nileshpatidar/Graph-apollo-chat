const { gql } = require('apollo-server-express');
const userSchema = require("./module/user");
const friendSchema = require('./module/friendschema');

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  
`;

module.exports = [linkSchema, userSchema, friendSchema];