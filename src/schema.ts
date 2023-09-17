import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefinitions = `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Vai Corinthians!",
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
