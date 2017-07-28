import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import addLyricToSongMutation from '../mutations/addLyricToSong';

class LyricCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lyricContent: '',
		};

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.mutate({
			variables: {
				songId: this.props.songId,
				content: this.state.lyricContent,
			}
		}).then(() => {
			this.setState({
				lyricContent: '',
			});
		});
	}

	onInputChange(e) {
		this.setState({
			lyricContent: e.target.value,
		})
	}

	render() {
		return (
			<div className='row'>
				<form className='col s12 m6 offset-m3' onSubmit={this.onFormSubmit}>
					<div className='row'>
						<div className='input-field col s12'>
							<label htmlFor='lyric_content'>Add a Lyric</label>
							<input
								id='lyric_content'
								type='text'
								className='validate'
								value={this.state.lyricContent}
								onChange={this.onInputChange}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default graphql(addLyricToSongMutation)(LyricCreate);
