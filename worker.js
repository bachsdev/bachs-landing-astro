import { createAEOWorker } from '@dualmark/cloudflare';
import astroWorker from './dist/_worker.js/index.js';

export default createAEOWorker({
  upstream: astroWorker,
  siteUrl: 'https://bachs.io',
  trailingSlash: 'never',
});
