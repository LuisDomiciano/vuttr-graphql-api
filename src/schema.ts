import { makeExecutableSchema } from "@graphql-tools/schema";

type Tool = {
  id: number;
  title: string;
  link: string;
  description: string;
};

const tools: Tool[] = [
  {
    id: 1,
    title: "Notion",
    link: "https://notion.so",
    description:
      "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
  },
];

const typeDefinitions = `
  type Query {
    tool: Tool!
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
    tool: () => tools[0],
  },
  Tool: {
    id: (parent: Tool) => parent.id,
    title: (parent: Tool) => parent.title,
    link: (parent: Tool) => parent.link,
    description: (parent: Tool) => parent.description,
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
