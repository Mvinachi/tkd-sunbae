import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKyoComponent } from './add-kyo.component';

describe('AddKyoComponent', () => {
  let component: AddKyoComponent;
  let fixture: ComponentFixture<AddKyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddKyoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
