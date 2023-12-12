import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchscreenComponent } from './searchscreen.component';

describe('SearchscreenComponent', () => {
  let component: SearchscreenComponent;
  let fixture: ComponentFixture<SearchscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchscreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
