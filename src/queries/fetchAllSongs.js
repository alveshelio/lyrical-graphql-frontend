import { gql } from 'react-apollo';

const songListQuery = gql `
	query SongListQuery {
		songs {
			id
			title
  	}
	}
`;

export default songListQuery;
