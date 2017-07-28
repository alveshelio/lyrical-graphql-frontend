import React from 'react';
import {
	ApolloClient,
	ApolloProvider,
	createNetworkInterface,
} from 'react-apollo';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import typeDefs from './data/schema';
import SongList from './components/SongList';
import CreateSong from './components/CreateSong';
import SongDetails from './components/SongDetails';

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
				<Router>
					<div>
						<Route exact path='/' component={SongList} />
						<Route path='/songs/new' component={CreateSong} />
						<Route path='/songs/:id' component={SongDetails} />
					</div>
				</Router>
			</ApolloProvider>
    )
  }
}
