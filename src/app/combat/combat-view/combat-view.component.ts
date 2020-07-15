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

  private redrawTable() {
    this.service.getCombatants().subscribe(
      combatants => this.dataSource = new MatTableDataSource<Combatant>(combatants)
    );
  }
}
