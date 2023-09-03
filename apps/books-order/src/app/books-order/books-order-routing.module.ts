import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksOrderComponent } from './books-order.component';

const routes: Routes = [
  {
    path: 'order-books',
    component: BooksOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksOrderRoutingModule { }
