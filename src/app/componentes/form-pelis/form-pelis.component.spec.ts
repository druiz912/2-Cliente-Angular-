import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPelisComponent } from './form-pelis.component';

describe('FormPelisComponent', () => {
  let component: FormPelisComponent;
  let fixture: ComponentFixture<FormPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPelisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
