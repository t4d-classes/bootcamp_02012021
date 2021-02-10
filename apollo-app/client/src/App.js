import { useQuery, gql } from "@apollo/client";

const ALL_AUTHORS_BOOKS_QUERY = gql`
  query AllAuthorsBooks {
    authors {
      id
      firstName
      lastName
      phoneNumber
    }
    books {
      id
      title
      category
      price
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_AUTHORS_BOOKS_QUERY);

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
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.category}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
