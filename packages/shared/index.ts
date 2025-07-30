export type * from '@prisma/client';
import appConfig from '../../config.json';

const appUrls =
  process.env.NODE_ENV === 'production'
    ? {
        ...appConfig.urls.production,
      }
    : {
        ...appConfig.urls.local,
      };

export { appConfig, appUrls };
