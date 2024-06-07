import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [username, setUsername] = useState("");
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && !usernames.includes(username)) {
      setUsernames([...usernames, username]);
    }
    setUsername("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <button type="submit">Click</button>
      </form>
      <div>
        {usernames.map((username, index) => (
          <GithubUser key={index} username={username} />
        ))}
      </div>
    </div>
  );
}
