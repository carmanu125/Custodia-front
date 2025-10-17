import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContrato } from './list-contrato';

describe('ListContrato', () => {
  let component: ListContrato;
  let fixture: ComponentFixture<ListContrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListContrato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
