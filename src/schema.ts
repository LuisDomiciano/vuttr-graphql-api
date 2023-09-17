import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefinitions = `
  type Query {
    hello: String!
    tool: Tool!
  }

  type Tool {
    id: ID!
    title: String!
    link: String!
    description: String!
    tags: [String!]!
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
