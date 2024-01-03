import User from "../models/user";

const userQuery = {
    getUser: async (parent, args, {}) => {
        return await User.findOne({_id: args.id})
    },
    getUsers: async (parent, args, {}) => {
        return await User.find({});
    }
}

const userMutation = {
    createUser: async (parent, args, {}) => {
        const user  = new User({
            name: args.name,
            email: args.email,
            password: args.password,
        });
        return await user.save();
    },
    updateUser: async (parent, args, {}) => {
        return await User.findOneAndUpdate({_id: args.id}, args);
    },
    deleteUser: async (parent, args, {}) => {
        return await User.findOneAndDelete({_id: args.id});
    }
}

export {userQuery, userMutation};