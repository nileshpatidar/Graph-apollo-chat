// var user = require("./../../model/User");
var user = require("./../../../config/model/User")
var md5 = require('md5')
module.exports = {
    Query: {
        users: async (parent, args) => {
            return await user.find();
            // return users.map(userItem =>   {
            //     console.log(userItem.username)
            //     // return { ...userItem, id: userItem._doc._id, username:  userItem._doc.username!==undefined ? userItem._doc.username :'',  }  //d structur 
            // })
            // return { users }

        },
        login: async (parent, { email, password }) => {
            let ifExists = await user.findOne({ email })
            if (!ifExists) {
                throw new UserInputError('User not found with given credentials')
            }
            if (md5(password) != ifExists.password) {
                throw new UserInputError('Invalid credentials')
            }
            if (!ifExists.verified) {
                throw new Error('Account is not verified')
            }
            const key = await bcrypt.hash(ifExists._id + Date.now(), 2)
            // LoginLog({ secretkey: key, user: ifExists._id }).save()
            // return { id: ifExists._id, email: ifExists.email, key: key }
            return { id: ifExists._id, email: ifExists.email}
        },
    },

    Mutation: {
        createUser: async (parent, { email, password, username,phone }) => {
            let ifExists = await user.findOne({ email })
            if (ifExists) {
                throw new Error('Email-ID already exists')
            }
            var password = md5(password)
            let newUser = await user({ email, password,username, phone  }).save()
            // pubsub.publish('CREATED', { newUserRegistered: { email, id: newUser._id } })
            return newUser
        },
    },

    // Subscription: {
    //     // newUserRegistered: {
    //     //     // subscribe: () => pubsub.asyncIterator('CREATED'),
    //     // },
    // },
};