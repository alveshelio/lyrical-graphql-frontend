import React from 'react';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface,
} from 'react-apollo';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';

import typeDefs from './data/schema';
import SongList from './components/SongList';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
	networkInterface,
});

import '../styles/index.scss';

export default class App extends React.Component {
  render() {
    return (
			<ApolloProvider client={client}>
				<div>
					<SongList />
				</div>
			</ApolloProvider>
    )
  }
}
