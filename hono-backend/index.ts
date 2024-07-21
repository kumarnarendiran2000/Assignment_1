import { Hono } from 'hono';
import { v4 as uuidv4 } from 'uuid';

const app = new Hono();
let contacts: { id: string, name: string, email: string, message: string }[] = [];

app.post('/contacts', async (c) => {
  const { name, email, message } = await c.req.json();
  const newContact = { id: uuidv4(), name, email, message };
  contacts.push(newContact);
  return c.json(newContact);
});

app.get('/contacts', (c) => {
  return c.json(contacts);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
