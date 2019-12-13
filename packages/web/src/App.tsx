import React, { useState } from 'react';
import './App.css';
import {
  useUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  UsersDocument
} from './types/graphql';

const App: React.FC = () => {
  const { data, loading } = useUsersQuery();
  const [addUser] = useAddUserMutation({
    refetchQueries: [{ query: UsersDocument }]
  });
  const [deleteUser] = useDeleteUserMutation({
    refetchQueries: [{ query: UsersDocument }]
  });
  const [submitError, setSubmitError] = useState<null | string>(null);
  const [email, setEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setSubmitError(null);
      await addUser({ variables: { email } });
      setEmail('');
    } catch (err) {
      setSubmitError(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <button type="submit">Add user</button>
        <span>{submitError}</span>
      </form>
      {data &&
        data.users &&
        data.users.map(user => (
          <div key={user.id}>
            <span>
              {user.id} - {user.email}
            </span>
            <button
              onClick={async () => {
                await deleteUser({ variables: { id: user.id } });
              }}
            >
              [X]
            </button>
          </div>
        ))}
      {loading && <div>Loading</div>}
    </div>
  );
};

export default App;
