import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CombatantService} from "../../service/combatant.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-combatant',
  templateUrl: './add-combatant.component.html',
  styleUrls: ['./add-combatant.component.css']
})
export class AddCombatantComponent implements OnInit {
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private service: CombatantService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<AddCombatantComponent>) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      'name': [undefined, [Validators.minLength(2), Validators.maxLength(100), Validators.required]],
      'initiative': [undefined, [Validators.min(1), Validators.required]],
      'armor': [undefined, [Validators.min(10), Validators.required]],
      'health': [undefined, [Validators.min(1), Validators.required]],
    });
  }

  addCombatant() {
    if (this.form != undefined && !this.form.invalid) {
      this.service.addCombatant(this.form.value);
      this.form.reset();
      this.dialogRef.close(true);
    }
  }

  cancel() {
    this.dialogRef.close(false);
  }

  get initiative() {
    return this.form.get('initiative')
  }

  get name() {
    return this.form.get('name')
  }

  get armor() {
    return this.form.get('armor')
  }

  get health() {
    return this.form.get('health')
  }
}
