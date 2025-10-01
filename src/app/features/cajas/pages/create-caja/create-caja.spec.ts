import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaja } from './create-caja';

describe('CreateCaja', () => {
  let component: CreateCaja;
  let fixture: ComponentFixture<CreateCaja>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCaja]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCaja);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
