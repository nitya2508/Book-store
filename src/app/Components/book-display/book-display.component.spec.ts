import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { BookDisplayComponent } from './book-display.component';

describe('BookDisplayComponent', () => {
  let component: BookDisplayComponent;
  let fixture: ComponentFixture<BookDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDisplayComponent ],
      imports: [MatSnackBarModule, RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addFeedback', () => {
    component.addFeedback()
    expect(component.addFeedback).toBeTruthy();
  });

  it('addToCart', () => {
    component.addToCart()
    expect(component.addToCart).toBeTruthy();
  });

  it('addToWishlist', () => {
    component.addToWishlist()
    expect(component.addToWishlist).toBeTruthy();
  });

  it('updateCount', () => {
    component.updateCount()
    expect(component.updateCount).toBeTruthy();
  });

  it('getfeedBack', () => {
    component.getfeedBack()
    expect(component.getfeedBack).toBeTruthy();
  });
  
});
