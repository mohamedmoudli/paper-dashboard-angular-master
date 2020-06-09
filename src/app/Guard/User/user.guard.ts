import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor( private router:Router){}
  canActivate(){
    const role = localStorage.getItem('role');
    if (role == 'ROLE_USER') {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }

}