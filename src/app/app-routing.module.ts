import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CombatViewComponent} from "./combat/combat-view/combat-view.component";
import {LibraryComponent} from "./library/library.component";


const routes: Routes = [
  {path: '', redirectTo: 'combat', pathMatch: 'full'},
  {path: 'combat', component: CombatViewComponent},
  {path: 'library', component: LibraryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
