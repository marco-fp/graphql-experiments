import hapi from 'hapi';
import { graphqlHapi } from 'apollo-server-hapi';
import { schema } from './src/schema';
import { graphiqlHapi } from 'graphql-server-hapi';

const server = new hapi.Server();

const HOST = 'localhost';
const PORT = 4000;

server.connection({
    host: HOST,
    port: PORT,
});

server.register({
    register: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema,
      },
      route: {
        cors: true
      }
    },
});

server.register({
  register: graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql',
    },
  },
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});
