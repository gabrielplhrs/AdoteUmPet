import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHelpShelterComponent } from './modal-help-shelter.component';

describe('ModalHelpShelterComponent', () => {
  let component: ModalHelpShelterComponent;
  let fixture: ComponentFixture<ModalHelpShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalHelpShelterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalHelpShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
