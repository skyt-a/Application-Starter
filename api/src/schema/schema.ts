import { GraphQLObjectType, GraphQLSchema, printSchema } from "graphql";
import queries from "./queries";

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "GraphQLSampleQueries",
        fields: () => ({
            ...queries,
        }),
    }),
});

console.log(printSchema(schema));

export default schema;