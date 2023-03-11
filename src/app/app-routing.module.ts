import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatComponent} from "./cat/cat.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path : 'cat', component : CatComponent},
  {path : 'list', component : ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
