import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCajas } from './list-cajas';

describe('ListCajas', () => {
  let component: ListCajas;
  let fixture: ComponentFixture<ListCajas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCajas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCajas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
