
import { UserInstance } from '../../db/user.controller';
import { createElysia } from '../../elysia';

export default createElysia({ prefix: '/dashboard', protectedRoute: true })
  .get('/user', async ({ user }) => {
    return new UserInstance(user).getNonSensitiveData();
  })
