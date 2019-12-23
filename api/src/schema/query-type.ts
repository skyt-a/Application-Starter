import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions } from "graphql-relay";

export const User = new GraphQLObjectType({
    name: "User",
    description: "お客様の情報",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    }),
});

export const { connectionType: UserConnection } = connectionDefinitions({
    name: "User",
    nodeType: User,
});
