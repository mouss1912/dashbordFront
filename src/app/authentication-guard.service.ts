import { Injectable } from '@angular/core';
import {CanActivate } from '@angular/router';

@Injectable({
  providedIn : 'root'
})
export class AuthenticationGuardService implements CanActivate {

  // TODO-3 : remplacer cette logique par l'utilisation de loginService.isUserConneted()
  isAuthenticated = true;
  constructor(){
  }

  canActivate(){
    return this.isAuthenticated;
  }

}
