import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { DisplayCardComponent } from './display-card.component';

describe('DisplayCardComponent', () => {
  let component: DisplayCardComponent;
  let fixture: ComponentFixture<DisplayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCardComponent ],
      imports: [RouterTestingModule, MatSnackBarModule, HttpClientModule, NgxPaginationModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('bookDetails', () => {
    component.bookDetails('books')
    expect(component.bookDetails).toBeTruthy();
  });

  it('addtocart', () => {
    component.addtocart('books')
    expect(component.addtocart).toBeTruthy();
  });

  it('addToWishlist', () => {
    component.addToWishlist('books')
    expect(component.addToWishlist).toBeTruthy();
  });

});
