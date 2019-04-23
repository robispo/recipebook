import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';


const authRoutes: Routes = [
  { path: 'singin', component: SinginComponent },
  { path: 'singup', component: SingupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
