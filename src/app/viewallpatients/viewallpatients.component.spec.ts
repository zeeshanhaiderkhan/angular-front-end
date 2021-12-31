import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallpatientsComponent } from './viewallpatients.component';

describe('ViewallpatientsComponent', () => {
  let component: ViewallpatientsComponent;
  let fixture: ComponentFixture<ViewallpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
