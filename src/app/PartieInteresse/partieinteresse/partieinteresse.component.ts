import { Component, OnInit } from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-partieinteresse',
  templateUrl: './partieinteresse.component.html',
  styleUrls: ['./partieinteresse.component.css']
})
export class PartieinteresseComponent implements OnInit {
  public NomPI;
   public test:any = [] ;
   public test1 = []  ;
  namecategories: any;
  public users: Object = [];
  public users1: Object = [];
  public users2: Object = [];
  users3:any;
  nomcat: any;
  public hidder = [ "id" , "partie interessé" , "poids" ];
  constructor(private partieinteresse: PartieinteresseService,
              private router:Router) { }

  ngOnInit(): void {
    this.partieinteresse.getCategoriesparPI()
      .subscribe((data) => {
        console.log(data);
        this.users = data;
      },error => {
        console.log(false);
      });


    this.partieinteresse.getpartieinteresse()
      .subscribe((data) => {
        this.users1 = data;
        console.log(this.users1)

      },error => {
        console.log(false);
      });





  }


affiche(id){
this.test1 = this.test;

}





  public search() {

  }


  aff(id){
    this.partieinteresse.getpartieinteressebyid(id)
      .subscribe((data) => {
        this.users2 = data;
        console.log(this.users2);
      },error => {

      })
  }
}
