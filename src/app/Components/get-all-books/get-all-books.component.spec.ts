import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { GetAllBooksComponent } from './get-all-books.component';

describe('GetAllBooksComponent', () => {
  let component: GetAllBooksComponent;
  let fixture: ComponentFixture<GetAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBooksComponent ],
      imports: [HttpClientModule, MatMenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getAllBooks', () => {
    component.getAllBooks()
    expect(component.getAllBooks).toBeTruthy();
  });

});
