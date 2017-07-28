import React, { Component } from 'react';
import {
	graphql,
} from 'react-apollo';

import { Link } from 'react-router-dom';

import addSongMutation from '../mutations/createSong';
import songListQuery from '../queries/fetchAllSongs';

class CreateSong extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songTitle: '',
		};

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.mutate({
			variables: {
				title: this.state.songTitle,
			},
			refetchQueries: [{ query: songListQuery }]
		}).then(() => {
			this.setState({
				songTitle: '',
			});
			this.props.history.push('/');
		});
	}

	onInputChange(e) {
		this.setState({
			songTitle: e.target.value,
		});
	}

	render() {
		return (
			<div className='row'>
				<Link to='/'>Back</Link>
				<h1 className='center'>Create Song</h1>
				<form className='col s12 m6 offset-m3' onSubmit={this.onFormSubmit}>
					<div className='row'>
						<div className='input-field col s12'>
							<input
								id='song_title'
								type='text'
								className='validate'
								value={this.state.songTitle}
								onChange={this.onInputChange}
							/>
							<label htmlFor='song_title'>Song Title</label>
						</div>
					</div>
				</form>
			</div>
		);
	}
}



export default graphql(addSongMutation)(CreateSong);
