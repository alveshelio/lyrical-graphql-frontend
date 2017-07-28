import React, { Component } from 'react';
import {
	graphql
} from 'react-apollo';

import fetchSongQuery from '../queries/fetchSong';

class SongDetails extends Component {
	render() {
		const { loading, error, song } = this.props.data;

		if (loading) {
			return <p>Loading...</p>
		}
		if (error) {
			return <p>{error.message}</p>
		}
		return (
			<div>
				<h3>{song.title}</h3>
				<ul>
					{song.lyrics.map(lyric => <li key={lyric.id}>{lyric.content}<span>{lyric.likes} likes</span></li>)}
				</ul>
			</div>
		);
	}
}

export default graphql(fetchSongQuery)(SongDetails);

