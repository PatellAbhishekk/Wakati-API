import { OpenAPIHono } from '@hono/zod-openapi';
import { notFound, onError } from 'stoker/middlewares';
import logger from '@/middlewares/logger';

// openAPIhono is a wrapper around hono that provides a lot of features
const app = new OpenAPIHono({ strict: false });

// app.use(pinoLogger());
app.use(logger());
app.notFound(notFound);
app.onError(onError);

app.get('/err', (c) => {
  throw new Error("What's this");
});

app.get('/', (c) => {
  return c.json({ message: 'Hello from our API' });
});

export default app;
