import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDependencia } from './create-dependencia';

describe('CreateDependencia', () => {
  let component: CreateDependencia;
  let fixture: ComponentFixture<CreateDependencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDependencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDependencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
