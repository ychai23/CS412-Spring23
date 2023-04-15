import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormsModule;
  let fixture: ComponentFixture<FormsModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});