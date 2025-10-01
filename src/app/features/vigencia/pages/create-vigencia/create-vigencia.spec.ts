import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVigencia } from './create-vigencia';

describe('CreateVigencia', () => {
  let component: CreateVigencia;
  let fixture: ComponentFixture<CreateVigencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateVigencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVigencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
