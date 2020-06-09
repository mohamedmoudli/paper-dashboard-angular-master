import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../Services/Login/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-register-admin',
  templateUrl: './create-register-admin.component.html',
  styleUrls: ['./create-register-admin.component.css']
})
export class CreateRegisterAdminComponent implements OnInit {

  err: any;

  constructor(private authService: AuthentificationService,
              private router:Router) { }

  ngOnInit() {
  }
  createCompteAdmin(data){
    console.log(data);
    this.authService.createregisteradmin(data).subscribe(
      resp=>{
        console.log(resp);
        return this.router.navigate(['home']);
      },error => {
        this.err=error;
        console.log(error);
        console.log(this.err);
        return this.err;
      }
    )
  }
}
