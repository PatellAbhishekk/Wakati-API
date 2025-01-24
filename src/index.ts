import createApp from '@/lib/create-app';
import configureOpenAPI from './lib/configureOpenapi';


const app = createApp();

configureOpenAPI(app);

app.get('/err', (c) => {
  throw new Error("What's this");
});

app.get('/', (c) => {
  return c.json({ message: 'Hello from our API' });
});

app.get('/analyzer', (c) => {
  return c.json({ message: `Hello from our API ` });
});

export default app;
