import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoucherieComponent } from './boucherie.component';

describe('BoucherieComponent', () => {
  let component: BoucherieComponent;
  let fixture: ComponentFixture<BoucherieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoucherieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoucherieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
