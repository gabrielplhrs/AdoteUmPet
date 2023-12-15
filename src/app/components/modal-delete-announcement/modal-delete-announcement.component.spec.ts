import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteAnnouncementComponent } from './modal-delete-announcement.component';

describe('ModalDeleteAnnouncementComponent', () => {
  let component: ModalDeleteAnnouncementComponent;
  let fixture: ComponentFixture<ModalDeleteAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDeleteAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalDeleteAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
