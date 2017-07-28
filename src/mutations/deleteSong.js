import { gql } from 'react-apollo';

const deleteSongMutation = gql`
	mutation DeleteSong($title: String) {
		deleteSong(title: $title) {
			id
			title
		}
	}
`;

export default deleteSongMutation;
