import { gql } from 'react-apollo';

const addSongMutation = gql`
	mutation AddSong($title: String) {
		addSong(title: $title) {
			id
			title
		}
	}
`;

export default addSongMutation;
