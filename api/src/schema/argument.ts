import { GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";

const RangeIntType = new GraphQLInputObjectType({
    name: "RangeInt",
    fields: () => ({
        min: { type: GraphQLInt },
        max: { type: GraphQLInt },
    }),
});

export const IdArgument = {
    id: { type: GraphQLID },
};

export const ConnectionArgument = {
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt, defaultValue: 0 },
};

export const UserArgument = {
    ...IdArgument,
    ...ConnectionArgument,
    name: { type: GraphQLString },
};
