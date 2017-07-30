import { gql } from 'react-apollo';

const fetchLyricQuery = gql `
	query FetchLyric($id: String) {
		lyric(id: $id) {
			id
			likes
			content
		}
	}
`;

export default fetchLyricQuery;
