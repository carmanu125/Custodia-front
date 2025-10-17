import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContrato } from './create-contrato';

describe('CreateContrato', () => {
  let component: CreateContrato;
  let fixture: ComponentFixture<CreateContrato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateContrato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateContrato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
