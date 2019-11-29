import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AlgoComponent } from './algo/algo.component';
import { RegisterComponent } from './auth/register/register.component';
import { AlgoDetailComponent } from './algo/detail/detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'algo', component: AlgoComponent },
  { path: 'algo/:algoId', component: AlgoDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
