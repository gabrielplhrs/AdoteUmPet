import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroScreenComponent } from './cadastro-screen.component';

describe('CadastroScreenComponent', () => {
  let component: CadastroScreenComponent;
  let fixture: ComponentFixture<CadastroScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
