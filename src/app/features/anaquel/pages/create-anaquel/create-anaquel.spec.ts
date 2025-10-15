import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnaquel } from './create-anaquel';

describe('CreateAnaquel', () => {
  let component: CreateAnaquel;
  let fixture: ComponentFixture<CreateAnaquel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAnaquel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAnaquel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
