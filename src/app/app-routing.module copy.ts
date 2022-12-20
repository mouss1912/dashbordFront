import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuardService } from './authentication-guard.service';

const routes: Routes = [
  // TODO-4 : utiliser AuthenticationGuardService pour la page about egalement
  {
    path: 'quizz',
    loadChildren: () => {
      return import('./meteo/meteo.module').then(res => res.MeteoModule)
    },
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'about',
    loadChildren: () => {
      return import('./about/about.module').then(res => res.AboutModule)
    }
  },
  {
    path: 'login',
    loadChildren: () => {
      return import('./login/login.module').then(res => res.LoginModule)
    }
  },
  {
    path: '**',
    redirectTo: 'quizz'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
