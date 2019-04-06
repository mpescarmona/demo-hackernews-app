import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HackernewComponent
} from "./components/index.pages";

const routes: Routes = [
  { path: 'home', component: HackernewComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
