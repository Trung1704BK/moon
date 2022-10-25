import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailjapanComponent } from './viewdetailjapan.component';

describe('ViewdetailjapanComponent', () => {
  let component: ViewdetailjapanComponent;
  let fixture: ComponentFixture<ViewdetailjapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdetailjapanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetailjapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
