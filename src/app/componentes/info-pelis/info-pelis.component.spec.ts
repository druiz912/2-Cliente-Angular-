import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPelisComponent } from './info-pelis.component';

describe('InfoPelisComponent', () => {
  let component: InfoPelisComponent;
  let fixture: ComponentFixture<InfoPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPelisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
