import { Component, OnInit } from '@angular/core';
import {ObjectiveService} from "../../Services/Objective/objective.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../Services/Login/authentification.service";

@Component({
  selector: 'app-forgett-password',
  templateUrl: './forgett-password.component.html',
  styleUrls: ['./forgett-password.component.css']
})
export class ForgettPasswordComponent implements OnInit {

  public data = {
    email: ''
  };

  constructor(private authentificationService : AuthentificationService,
              private router: Router) { }

  ngOnInit(): void {
  }


  forgettpassword(){
    this.authentificationService.forgettPassword(this.data).subscribe(
      resp=>{
            this.router.navigate(['resetpassword'])
      },error => {
        console.log(false);

        return error;
      }
    )
  }
}
