import { gql } from 'react-apollo';

const deleteSongMutation = gql`
	mutation DeleteSong($id:String) {
		deleteSong(id:$id) {
			id
		}
	}
`;

export default deleteSongMutation;
