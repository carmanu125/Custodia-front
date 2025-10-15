import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnaquel } from './list-anaquel';

describe('ListAnaquel', () => {
  let component: ListAnaquel;
  let fixture: ComponentFixture<ListAnaquel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAnaquel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAnaquel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
