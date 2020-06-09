import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuard implements CanActivate {
  constructor( private router:Router){}
  canActivate() {
    const role = localStorage.getItem('role');
    console.log(role);
    if (role == 'ROLE_SUPERADMIN') {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }

}
