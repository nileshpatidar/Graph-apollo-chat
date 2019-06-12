var friendModel = require("./../../../config/model/friendModel");
var UserdModel = require("./../../../config/model/User");
module.exports = {
    Query: {
        getrequest: async (parent, args) => {
           var data = await friendModel.find({ user_id: args.user_id,accept_status:'Pending'})
            return data;
        },

        myfriends:async (parent ,args )=>{
            var query = { $or: [{ user_id: args.user_id , friend_id: args.user_id } ], accept_status:'Accepted' }
            var friends = await friendModel.find(query);
            return friends;
        }
    },

    Mutation: {
        sendRequest: async (parent, { friend_id, user_id }) => {
            if(friend_id == user_id){
                throw new Error("Same Credential")
            }
            var ifuser = await UserdModel.findById(user_id);
            if(!ifuser){
                throw new Error("No User Found With Given Credential")
            }
            var isfriend = await UserdModel.findById(user_id);
            if(!isfriend){
                throw new Error("No User  Found With Given Credential")
            }
            var query = { $or: [{ user_id: friend_id , friend_id: user_id }, { friend_id, user_id }] };

            let issent = await friendModel.findOne(query);
            if (issent) {
                throw new Error('Already Sent ')
            }else{
            var requested = await friendModel({user_id,friend_id}).save()
            return requested;
        }
            // pubsub.publish('CREATED', { newUserRegistered: { email, id: newUser._id } })
        },
    },

    // Subscription: {
    //     // newUserRegistered: {
    //     //     // subscribe: () => pubsub.asyncIterator('CREATED'),
    //     // },
    // },
};