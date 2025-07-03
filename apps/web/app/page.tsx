import { client } from '@repo/prisma/client';

export default async function Home() {
  const users = await client.user.findMany();

  return (
    <div>
      <h1>Welcome to anukool.info</h1>
      <h2>User List:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.username} <br />
            <strong>Password:</strong> {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}
