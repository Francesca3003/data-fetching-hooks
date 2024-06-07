import { useGithubUser } from "./hooks/useGithubUser";

export function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <span>Caricamento..</span>}
      {error && <span>Si è verificato un errore</span>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <h2>{data.login}</h2>
          <img src={data.avatar_url} alt={`${data.login} avatar`} />
        </div>
      )}
    </div>
  );
}
