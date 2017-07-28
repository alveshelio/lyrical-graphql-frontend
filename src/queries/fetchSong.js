import { gql } from 'react-apollo';

const fetchSongQuery = gql`
	query FetchSong($id:String!) {
		song(id:$id) {
			id
			title
			lyrics {
				id
				likes
				content
			}
		}
	}
`;

export default fetchSongQuery;
