import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: 'orders',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'booksOrder',
      exposedModule: './Module'
    }).then(m => m.BooksOrderModule)
  },
];
