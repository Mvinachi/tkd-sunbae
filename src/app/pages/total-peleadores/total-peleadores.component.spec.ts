import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPeleadoresComponent } from './total-peleadores.component';

describe('TotalPeleadoresComponent', () => {
  let component: TotalPeleadoresComponent;
  let fixture: ComponentFixture<TotalPeleadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalPeleadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalPeleadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
