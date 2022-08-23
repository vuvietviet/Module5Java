import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./product/create/create.component";
import {ShowComponent} from "./product/show/show.component";
import {AuthGuard} from "./auth.guard";
import {EditComponent} from "./product/edit/edit.component";
import {DeleteComponent} from "./product/delete/delete.component";

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: '', component: ShowComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
