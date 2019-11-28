import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Injectable()
export class AuthGuard implements CanActivate {
  

  constructor(private _apiService: ApiService,
      private _router: Router) {}

  canActivate(): boolean {
    if (this._apiService.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['login']);
      return false;
    }
  }
}