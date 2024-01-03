import { userQuery, userMutation } from "./user";

const UserQuery = {
    Query: {
        ...userQuery
    },
    Mutation: {
        ...userMutation
    }
}

export default UserQuery;