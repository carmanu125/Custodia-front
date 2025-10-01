import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVigencia } from './list-vigencia';

describe('ListVigencia', () => {
  let component: ListVigencia;
  let fixture: ComponentFixture<ListVigencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListVigencia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVigencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
