import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface Combatant {
  name: string;
  initiative: number;
  armor: number;
  health: number;
}

const DATA: Combatant[] = [
  {initiative: 6, name: 'Aboleth', armor: 20, health: 50},
  {initiative: 12, name: 'Beholder', armor: 20, health: 50},
  {initiative: 3, name: 'Griff', armor: 20, health: 50},
  {initiative: 17, name: 'Fire Elemental', armor: 20, health: 50},
  {initiative: 5, name: 'Commoner', armor: 20, health: 50},
  {initiative: 16, name: 'Veteran', armor: 20, health: 50},
  {initiative: 7, name: 'Lich', armor: 20, health: 50},
  {initiative: 18, name: 'Ancient Blue Dragon', armor: 20, health: 50},
];

@Component({
  selector: 'app-combat-view',
  templateUrl: './combat-view.component.html',
  styleUrls: ['./combat-view.component.css']
})
export class CombatViewComponent implements OnInit {

  options: FormGroup;
  name;
  initiative;
  armor;
  health;
  displayedColumns: string[] = ['initiative', 'name', 'armor', 'health'];
  dataSource: MatTableDataSource<Combatant>;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      name: this.name,
      initiative: this.initiative,
      armor: this.armor,
      health: this.health,
    });
  }

  ngOnInit() {
    this.name = new FormControl("",
      [Validators.minLength(3), Validators.maxLength(100), Validators.required]);
    this.initiative = new FormControl(undefined, [Validators.min(1), Validators.required]);
    this.armor = new FormControl(undefined, [Validators.min(10), Validators.required]);
    this.health = new FormControl(undefined, [Validators.min(1), Validators.required]);
    DATA.sort((a: Combatant, b: Combatant) => {
      if (a.initiative > b.initiative) {
        return -1;
      } else if (a.initiative < b.initiative) {
        return 1;
      } else {
        return 0;
      }
    });
    this.dataSource = new MatTableDataSource<Combatant>(DATA);
  }
}
