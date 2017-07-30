import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import likeLyricMutation from '../mutations/likeLyric';

class LyricList extends Component {
	constructor(props) {
		super(props);

		this.onLikeLyric = this.onLikeLyric.bind(this);
	}

	renderLyrics() {
		const { lyrics } = this.props;
		if (lyrics && lyrics.length > 0) {
			return (
				lyrics.map(({ id, likes, content }) => {
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
			);
		}
	}

	onLikeLyric(id) {
		this.props.mutate({
			variables: { id },
		});

	}

	render() {
		return (
			<ul className='collection'>
				{this.renderLyrics()}
			</ul>
		);
	}
}

export default graphql(likeLyricMutation)(LyricList);
