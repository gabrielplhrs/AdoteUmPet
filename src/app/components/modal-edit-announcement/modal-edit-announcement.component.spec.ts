import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAnnouncementComponent } from './modal-edit-announcement.component';

describe('ModalEditAnnouncementComponent', () => {
  let component: ModalEditAnnouncementComponent;
  let fixture: ComponentFixture<ModalEditAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
