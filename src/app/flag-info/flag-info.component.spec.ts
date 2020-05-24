import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagInfoComponent } from './flag-info.component';

describe('FlagInfoComponent', () => {
  let component: FlagInfoComponent;
  let fixture: ComponentFixture<FlagInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
