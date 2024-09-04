import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoomComponent } from './add-poom.component';

describe('AddPoomComponent', () => {
  let component: AddPoomComponent;
  let fixture: ComponentFixture<AddPoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
