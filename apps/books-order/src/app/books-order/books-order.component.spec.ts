import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksOrderComponent } from './books-order.component';

describe('BooksOrderComponent', () => {
  let component: BooksOrderComponent;
  let fixture: ComponentFixture<BooksOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
