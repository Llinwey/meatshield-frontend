import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Combatant} from "../../model/combatant";
import {CombatantService} from "../../service/combatant.service";
import {MatDialog} from "@angular/material/dialog";
import {AddCombatantComponent} from "../add-combatant/add-combatant.component";

@Component({
  selector: 'app-combat-view',
  templateUrl: './combat-view.component.html',
  styleUrls: ['./combat-view.component.css']
})
export class CombatViewComponent implements OnInit {

  displayedColumns: string[] = ['initiative', 'name', 'armor', 'health'];
  dataSource: MatTableDataSource<Combatant>;
  private activeCombatant: Combatant;
  private activeIndex = 0;
  private highestIndex;

  constructor(private service: CombatantService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.redrawTable();
  }

  showForm() {
    let dialogRef = this.dialog.open(AddCombatantComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.redrawTable();
      }
    })
  }

  startCombat() {
    this.activeCombatant = this.dataSource.filteredData[this.activeIndex];
  }

  nextCombatant() {
    if (this.activeIndex < this.highestIndex) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
    this.activeCombatant = this.dataSource.filteredData[this.activeIndex];
  }

  endCombat() {
    this.activeIndex = 0;
    this.activeCombatant = null;
  }

  private redrawTable() {
    this.service.getCombatants().subscribe(
      combatants => {
        this.highestIndex = combatants.length - 1;
        this.dataSource = new MatTableDataSource<Combatant>(combatants);
      }
    );
  }
}
