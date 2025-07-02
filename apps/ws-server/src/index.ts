import { WebSocketServer } from "ws";
import { client } from '@repo/prisma/client';

const ws = new WebSocketServer({ port: 3001 });

ws.on('connection', async (socket) => {
  const data = {
    username: `ws_username_${Math.random().toString()}`,
    password: `ws_password`
  };

  try {
    await client.user.create({ data });
    socket.send('The ws is connected and user is created');
  } catch (err) {
    console.error('Error creating user:', err);
    socket.send('Failed to create user');
  }
});
