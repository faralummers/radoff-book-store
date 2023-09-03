import { Route } from '@angular/router';
import { BooksOrderComponent } from './books-order/books-order.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: BooksOrderComponent,
    pathMatch: 'full'
  },
  {
    path: 'order-books',
    loadChildren: () => import('./books-order/books-order.module').then(m => m.BooksOrderModule)
  }
];
