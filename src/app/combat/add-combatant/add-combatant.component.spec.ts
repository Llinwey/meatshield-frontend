import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddCombatantComponent} from './add-combatant.component';

describe('AddCombatantComponent', () => {
  let component: AddCombatantComponent;
  let fixture: ComponentFixture<AddCombatantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCombatantComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCombatantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
