import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
const typeDefs = `
type Channel {
   id: ID!
   name: String
}

type Query {
   channels: [Channel]
}
`;

const schema = makeExecutableSchema({ typeDefs });
export { schema };
