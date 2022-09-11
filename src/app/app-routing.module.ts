import { RouterModule, Routes } from '@angular/router';
import { CoreGuard } from './core/guard/guard.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    loadChildren: ()=> import('./auth/log/log.module').then(m=> m.LogModule)
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m=> m.DashboardModule),
    canActivate: [CoreGuard],
    canLoad: [CoreGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
