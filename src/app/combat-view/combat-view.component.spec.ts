import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CombatViewComponent} from './combat-view.component';

describe('CombatViewComponent', () => {
  let component: CombatViewComponent;
  let fixture: ComponentFixture<CombatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CombatViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
