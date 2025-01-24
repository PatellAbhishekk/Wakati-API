import type { OpenAPIHono } from '@hono/zod-openapi';
import PackageJSON from '../../package.json';
import { apiReference } from '@scalar/hono-api-reference';

export default function configureOpenAPI(app: OpenAPIHono) {
  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      title: 'Wakati API',
      version: PackageJSON.version,
      description: 'API for Wakati',
    },
  });
  app.get(
    '/reference',
    apiReference({
      spec: {
        url: '/doc',
      },
    })
  );
}
