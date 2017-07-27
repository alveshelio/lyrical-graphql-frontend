const typeDefs = `
type Song {
  id: ID!
  title: String!
  lyrics: [Lyric]
}
type Lyric {
  id: ID
  likes: String
  content: String
  song: Song
}
type Query {
  songs: [Song]
  song(id: String): Song
  lyrics: [Lyric]
  lyric(id: String): Lyric
}
type Mutation {
  addSong(title: String!): Song
 }
`;

export default typeDefs;
