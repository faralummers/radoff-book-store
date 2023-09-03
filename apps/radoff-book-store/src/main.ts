import { loadManifest } from '@angular-architects/module-federation';
// for loading the micro frontend's remoteEntry.js before angular boostraps
Promise.all([
  loadManifest('assets/mf.manifest.json')
])
  .catch((err) => console.error('Error loading remote entries', err))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
