import { makeExecutableSchema } from "@graphql-tools/schema";
import { Tool } from "@prisma/client";
import { GraphQLContext } from "./context";

const typeDefinitions = `
  
  type Query {
    tool: [Tool!]!
  }

  type Mutation {
    postTool(title: String!, link: String!, description: String!): Tool!
  }

  type Tool {
    id: ID!
    title: String!
    link: String!
    description: String!
  }
`;

const resolvers = {
  Query: {
    tool: (parent: unknown, args: {}, context: GraphQLContext) =>
      context.prisma.tool.findMany(),
  },
  Tool: {
    id: (parent: Tool) => parent.id,
    title: (parent: Tool) => parent.title,
    link: (parent: Tool) => parent.link,
    description: (parent: Tool) => parent.description,
  },
  Mutation: {
    async postTool(
      parent: unknown,
      args: { title: string; link: string; description: string },
      context: GraphQLContext
    ) {
      const toolCreated = await context.prisma.tool.create({
        data: {
          title: args.title,
          link: args.link,
          description: args.description,
        },
      });
      return toolCreated;
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
