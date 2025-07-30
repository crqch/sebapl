import { appUrls } from 'shared';
import '../global.d.ts';

global.env = process.argv.join(' ').includes('PREVIEW')
  ? 'preview'
  : process.argv.join(' ').includes('LOCAL')
    ? 'local'
    : 'prod';
// global.env = "prod";
Bun.env.BRANCH = process.argv.join(' ').includes('PREVIEW')
  ? 'PREVIEW'
  : 'PROD';
global.envUrl = appUrls.backend;
global.frontendUrl = appUrls.frontend;

require('./index');
