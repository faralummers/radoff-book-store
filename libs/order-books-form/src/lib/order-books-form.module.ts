import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { OrderBooksFormComponent } from './order-books-form.component';

@NgModule({
  declarations: [OrderBooksFormComponent],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule],
  exports: [
    OrderBooksFormComponent
  ]
})
export class OrderBooksFormModule {}
