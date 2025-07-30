import type { User } from '@prisma/client';
import { db } from './index';

export class UserInstance {
  public data: User;

  constructor(data: User) {
    this.data = data;
  }

  async save() {
    await db.user.update({
      where: { id: this.data.id },
      data: {
        ...this.data,
      },
    });
  }

  getNonSensitiveData() {
    return {
      ...this.data,
      password: undefined
    };
  }
}
