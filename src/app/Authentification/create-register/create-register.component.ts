import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../Services/Login/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
  styleUrls: ['./create-register.component.css']
})
export class CreateRegisterComponent implements OnInit {
  err: any;

  constructor(private authService: AuthentificationService,
              private router:Router) { }

  ngOnInit() {
  }
  createCompte(data){
    console.log(data);
    this.authService.createregister(data).subscribe(
      resp=>{
        console.log(resp);
        return this.router.navigate(['login']);
      },error => {
        this.err=error;
        console.log(error);
        console.log(this.err);
        return this.err;
      }
    )
  }
}
