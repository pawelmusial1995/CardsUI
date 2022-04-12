import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // {path:'', pathMatch: 'full', redirectTo: 'login'},
  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
