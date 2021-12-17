import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PlaceOrderComponent } from './place-order.component';

describe('PlaceOrderComponent', () => {
  let component: PlaceOrderComponent;
  let fixture: ComponentFixture<PlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceOrderComponent ],
      imports: [RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCartItems', () => {
    component.getCartItems()
    expect(component.getCartItems).toBeTruthy();
  });

  it('deleteCartitem', () => {
    component.deleteCartitem('book')
    expect(component.deleteCartitem).toBeTruthy();
  });

  it('onSubmit', () => {
    component.onSubmit()
    expect(component.onSubmit).toBeTruthy();
  });

  it('orderplaced', () => {
    component.orderplaced()
    expect(component.orderplaced).toBeTruthy();
  });



});
