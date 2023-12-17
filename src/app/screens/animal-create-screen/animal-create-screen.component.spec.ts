import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCreateScreenComponent } from './animal-create-screen.component';

describe('AnimalCreateScreenComponent', () => {
  let component: AnimalCreateScreenComponent;
  let fixture: ComponentFixture<AnimalCreateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalCreateScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalCreateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
