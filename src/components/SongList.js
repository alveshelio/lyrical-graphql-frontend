import React, { Component } from 'react';
import {
	graphql,
} from 'react-apollo';
import { Link } from 'react-router-dom';

import songListQuery from '../queries/fetchAllSongs';
import deleteSongMutation from '../mutations/deleteSong';

class SongList extends Component {
	constructor(props) {
		super(props);

		this.onSongDelete = this.onSongDelete.bind(this);
	}

	onSongDelete(id) {
		this.props.mutate({
			variables: {
				id
			},
		}).then(() => this.props.data.refetch());
	}

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
					{
						songs.map(({ id, title }) => {
								return (
									<li
										className='collection-item'
										key={id}
									>
										{title}
										<i className='material-icons right song-delete' onClick={() => this.onSongDelete(id)}>
											delete
										</i>
									</li>);
							}
						)
					}
				</ul>
				<Link className='bt-floating btn-large btn-round red right' to='/songs/new'>
					<i className='material-icons'>add</i>
				</Link>
			</div>
		);
	}
}

export default graphql(deleteSongMutation)(
	graphql(songListQuery)(SongList)
);
