import React, { Component } from 'react';
import {
	graphql
} from 'react-apollo';
import { Link } from 'react-router-dom';

import LyricCreate from './LyricCreate';
import fetchSongQuery from '../queries/fetchSong';
import likeLyricMutation from '../mutations/likeLyric';

class SongDetails extends Component {
	constructor(props) {
		super(props);

		this.onLikeLyric = this.onLikeLyric.bind(this);
	}

	renderLyrics() {
		const { song } = this.props.data;
		if (song.lyrics) {
			return (<ul className='collection'>
				{
					song.lyrics.map(({ id, likes, content }) => {
						return (
							<li className='collection-item lyric' key={id}>
								<div className='lyric-content'>
									{content}
								</div>
								<div className='lyric-meta'>
									<span>likes {likes}</span>
									<i className='material-icons right' onClick={() => this.onLikeLyric(id)}>
										thumb_up
									</i>
								</div>
							</li>
						);
					})
				}
			</ul>);
		}
	}

	onLikeLyric(id) {
		const songId = this.props.match.params.id;

		this.props.mutate({
			variables: {
				id
			},
			refetchQueries: [{
				query: fetchSongQuery,
				variables: { id: songId },
			}],
		});
	}

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
				{this.renderLyrics()}
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
})(
	graphql(likeLyricMutation)(SongDetails)
);
