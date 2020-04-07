import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../Login/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role1: any;
  id: any;
  err: any;
  constructor(private authService: AuthentificationService,
              private router:Router) { }


  ngOnInit() {
  }

  onLogin(data){
    console.log(data);
    this.authService.login1(data).subscribe(
      resp=>{
        console.log(resp.body['access_token']);
        console.log(resp.body['user_id']);
        let jwt=resp.body['access_token'];
        let roles=resp.body['roles'];
        let id=resp.body['user_id'];
        this.role1=roles;
        this.id=resp.body['user_id'];
        console.log(this.role1);

        this.authService.saveToken(jwt);
        this.authService.saveRole(roles);
        this.authService.saveId(id);
        return this.router.navigate(['home']);




      },error => {
        this.err=error;
        console.log(error);
        console.log(this.err);
        return this.err;
      }

    )

  }
  isAuthenticated1(){
    console.log(this.authService.isAuthenticated1());
    return this.authService.isAuthenticated1();
  }


  isAdmin(){
    console.log(this.authService.isUser(this.role1));
    return this.authService.isUser(this.role1);
  }
  isUser(){
    console.log(this.authService.isUser(this.role1));
    return this.authService.isUser(this.role1);

  }


}
