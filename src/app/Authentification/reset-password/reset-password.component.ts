import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../Services/Login/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  token: any;
  data = {
    password: ''
  };
  constructor(private authentificationService : AuthentificationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  forgettpassword(){
    this.authentificationService.ResetPassword(this.token , this.data).subscribe(
      resp=>{
        console.log(true)
        this.router.navigate(['login'])
      },error => {
        alert('token erroné  ');

        return error;
      }
    )
  }
}
