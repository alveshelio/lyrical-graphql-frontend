import { gql } from 'react-apollo';

const fetchSongQuery = gql`
	query FetchSong($id:String) {
  song(id:$id) {
    title
    lyrics {
      likes
      content
    }
  }
}
`;

export default fetchSongQuery;
