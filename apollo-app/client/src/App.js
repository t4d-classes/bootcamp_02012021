import { useQuery, gql } from "@apollo/client";

const MESSAGE_QUERY = gql`
  query GetMessage {
    message
  }
`;

function App() {
  const { loading, error, data } = useQuery(MESSAGE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{data.message}</div>;
}

export default App;
