import {Injectable} from '@angular/core';
import {Combatant} from "../model/combatant";
import {Observable, of} from "rxjs";

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

@Injectable({
  providedIn: 'root'
})
export class CombatantService {

  getCombatants(): Observable<Combatant[]> {
    DATA.sort((a: Combatant, b: Combatant) => {
      if (a.initiative > b.initiative) {
        return -1;
      } else if (a.initiative < b.initiative) {
        return 1;
      } else {
        return 0;
      }
    });
    return of(DATA);
  }

  addCombatant(combatant: Combatant): void {
    DATA.push(combatant);
  }
}
