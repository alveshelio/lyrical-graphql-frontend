import React, { Component } from 'react';
import {
	graphql,
} from 'react-apollo';
import { Link } from 'react-router-dom';

import songListQuery from '../queries/fetchAllSong';
import deleteSongMutation from '../mutations/deleteSong';

class SongList extends Component {
	render() {
		const { loading, error, songs } = this.props.data;

		if (loading) {
			return <p>Loading...</p>;
		}
		if (error) {
			return <p>{error.message}</p>;
		}
		return (
			<div>
				<ul className='collection'>
					{songs.map(song => <li className='collection-item' key={song.id}>{song.title}</li>)}
				</ul>
				<Link className='bt-floating btn-large btn-round red right' to='/songs/new'>
					<i className='material-icons'>add</i>
				</Link>
			</div>
		);
	}
}

export default graphql(deleteSongMutation)(
	(songListQuery)(SongList)
);
