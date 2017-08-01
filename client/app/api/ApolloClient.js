import {
  ApolloClient
} from 'react-apollo';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

 import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
 import { typeDefs } from './schema';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });
const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

const client = new ApolloClient({
   networkInterface: mockNetworkInterface,
 });

export default client;
