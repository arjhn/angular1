import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagfetchComponent } from './flagfetch.component';

describe('FlagfetchComponent', () => {
  let component: FlagfetchComponent;
  let fixture: ComponentFixture<FlagfetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagfetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
