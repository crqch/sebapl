import { createElysia } from '../elysia';
import dashboard from './dashboard';

export default createElysia()
  .use(dashboard)
