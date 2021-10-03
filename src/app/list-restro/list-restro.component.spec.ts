import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestroComponent } from './list-restro.component';

describe('ListRestroComponent', () => {
  let component: ListRestroComponent;
  let fixture: ComponentFixture<ListRestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
