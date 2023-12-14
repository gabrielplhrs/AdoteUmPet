import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrigoScreenComponent } from './abrigo-screen.component';

describe('AbrigoScreenComponent', () => {
  let component: AbrigoScreenComponent;
  let fixture: ComponentFixture<AbrigoScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrigoScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbrigoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
