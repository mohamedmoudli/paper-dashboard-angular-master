import { Component, OnInit } from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-pi',
  templateUrl: './ajouter-pi.component.html',
  styleUrls: ['./ajouter-pi.component.css']
})
export class AjouterPIComponent implements OnInit {
  public users = [];
  constructor(private partieinteresse: PartieinteresseService,
              private router:Router) { }

  ngOnInit(): void {

    this.partieinteresse.getCategoriesPI()
      .subscribe((data) => {

        this.users = data['hydra:member'];
        console.log(this.users);

      },error => {
        console.log(false);
      });
  }


  ajouterpartieinteresse(data){
    console.log(data);
    this.partieinteresse.postpartieinteresse(data).subscribe(
      resp=>{
        console.log(resp);
       console.log(true)
        return this.router.navigate(['partieinteresse'])
      },error => {

        console.log(error);

        return error;
      }
    )
  }

}
