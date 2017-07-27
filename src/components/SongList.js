import React, { Component } from 'react';
import {
	gql,
	graphql,
} from 'react-apollo';

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
			<ul className='collection'>
				{songs.map(song => <li className='collection-item' key={song.id}>{song.title}</li>)}
			</ul>
		);
	}
}

const songListQuery = gql `
	query SongListQuery {
		songs {
			id
			title
  	}
	}
`;

export default graphql(songListQuery)(SongList);
