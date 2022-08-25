import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowComponent} from "./crud/show/show.component";
import {CreateComponent} from "./crud/create/create.component";
import {EditComponent} from "./crud/edit/edit.component";
import {DeleteComponent} from "./crud/delete/delete.component";
import {DetailComponent} from "./crud/detail/detail.component";

const routes: Routes = [
  { path: '', component: ShowComponent },
  { path: ':message', component: ShowComponent },
  { path: 'create/tuor', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
