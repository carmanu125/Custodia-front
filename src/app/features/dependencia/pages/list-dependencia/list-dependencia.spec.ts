import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDependencia } from './list-dependencia';

describe('ListDependencia', () => {
  let component: ListDependencia;
  let fixture: ComponentFixture<ListDependencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDependencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDependencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
