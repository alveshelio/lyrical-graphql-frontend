import React, { Component } from 'react';
import {
	graphql
} from 'react-apollo';
import { Link } from 'react-router-dom';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSongQuery from '../queries/fetchSong';

class SongDetails extends Component {
	render() {
		const { loading, error, song } = this.props.data;

		if (loading) {
			return <p>Loading...</p>;
		}

		if (error) {
			return <p>{error.message}</p>;
		}

		return (
			<div>
				<Link to='/'>Back</Link>
				<h3>{song.title}</h3>
				<LyricList lyrics={song.lyrics} />
				<hr />
				<LyricCreate songId={this.props.match.params.id} />
			</div>
		);
	}
}

export default graphql(fetchSongQuery, {
	options: (props) => {
		return { variables: { id: props.match.params.id } };
	}
})(SongDetails);
