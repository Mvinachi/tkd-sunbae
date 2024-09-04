import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPeleadorComponent } from './edit-peleador.component';

describe('EditPeleadorComponent', () => {
  let component: EditPeleadorComponent;
  let fixture: ComponentFixture<EditPeleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPeleadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPeleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
