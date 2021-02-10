import { useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";

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

const APPEND_AUTHOR_MUTATION = gql`
  mutation AppendAuthor($author: NewAuthor) {
    appendAuthor(author: $author) {
      id
      firstName
      lastName
      phoneNumber
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(ALL_AUTHORS_BOOKS_QUERY);

  const [mutateAppendAuthor] = useMutation(APPEND_AUTHOR_MUTATION);

  const [authorForm, setAuthorForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const change = (e) => {
    setAuthorForm({
      ...authorForm,
      [e.target.name]: e.target.value,
    });
  };

  const appendAuthor = () => {
    mutateAppendAuthor({
      variables: {
        author: authorForm,
      },
      refetchQueries: [{ query: ALL_AUTHORS_BOOKS_QUERY }],
    }).then(() => {
      setAuthorForm({
        firstName: "",
        lastName: "",
        phoneNumber: "",
      });
    });
  };

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
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={authorForm.firstName}
            onChange={change}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={authorForm.lastName}
            onChange={change}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={authorForm.phoneNumber}
            onChange={change}
          />
        </div>
        <button type="button" onClick={appendAuthor}>
          Add Author
        </button>
      </form>
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
