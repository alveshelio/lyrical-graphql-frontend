import { gql } from 'react-apollo';

const addLyricToSongMutation = gql`
	mutation AddLyricToSong ($songId: String, $content: String){
		addLyricToSong(songId: $songId, content: $content) {
			id
			lyrics {
				id
				likes
				content
			}
		}
	}
`;

export default addLyricToSongMutation;
