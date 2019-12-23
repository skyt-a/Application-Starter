import { resolveUsers } from "../resolvers/user-resolver";
import { UserArgument } from "./argument";
import {
    User,
    UserConnection,
} from "./query-type";

const userQueries = {
    users: {
        type: UserConnection,
        args: UserArgument,
        resolve: resolveUsers,
    },
};

export default {
    ...userQueries
};