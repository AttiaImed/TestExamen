import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WassefComponent } from './wassef.component';

describe('WassefComponent', () => {
  let component: WassefComponent;
  let fixture: ComponentFixture<WassefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WassefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WassefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
