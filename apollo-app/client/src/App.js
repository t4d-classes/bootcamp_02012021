import { useQuery, gql } from "@apollo/client";

const ALL_AUTHORS_QUERY = gql`
  query AllAuthors {
    authors {
      id
      firstName
      lastName
      phoneNumber
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_AUTHORS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <ul>
        {data.authors.map((author) => (
          <li key={author.id}>
            {author.firstName} {author.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
