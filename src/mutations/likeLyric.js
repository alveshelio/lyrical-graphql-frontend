import { gql } from 'react-apollo';

const likeLyricMutation = gql`
	mutation LikeLyric($id: String) {
		likeLyric(id:$id) {
			id
			likes
		}
	}
`;

export default likeLyricMutation;
