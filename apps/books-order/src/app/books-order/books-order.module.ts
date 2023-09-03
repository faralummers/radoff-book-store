import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksOrderRoutingModule } from './books-order-routing.module';
import { BooksOrderComponent } from './books-order.component';
import { OrderBooksFormModule } from '@org/order-books-form';

@NgModule({
  declarations: [BooksOrderComponent],
  imports: [CommonModule, BooksOrderRoutingModule, OrderBooksFormModule],
})
export class BooksOrderModule {}
