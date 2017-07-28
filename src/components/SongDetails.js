import React, { Component } from 'react';
import {
	graphql
} from 'react-apollo';
import { Link } from 'react-router-dom';

import fetchSongQuery from '../queries/fetchSong';

class SongDetails extends Component {
	renderLyrics() {
		const { song } = this.props.data;
		if (song.lyrics) {
			return (<ul>
				{song.lyrics.map(({ id, likes, content}) => <li key={id}>Lyric Id {id} --- {content} - <span>{likes} likes</span></li>)}
			</ul>)
		}
	}

	render() {
		const { loading, error, song } = this.props.data;

		if (!song) {
			return (
				<div>
					<p>There&#39;s no song that match this id: {this.props.match.params.id}</p>
					<Link to='/'>Back</Link>
				</div>
			)
		}

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
				{this.renderLyrics()}
			</div>
		);
	}
}

export default graphql(fetchSongQuery, {
	options: (props) => {
		return { variables: { id: props.match.params.id } };
	}
})(SongDetails);

