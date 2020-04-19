import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {RisqueService} from '../../Services/Risque/risque.service';

@Component({
  selector: 'app-create-categorie-risque',
  templateUrl: './create-categorie-risque.component.html',
  styleUrls: ['./create-categorie-risque.component.css']
})
export class CreateCategorieRisqueComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  public data = {
    NomCategorie: ''
  };

  id1: number;
  public data2: any = [];
  public data1: any = {
    id: "",
    fisrtname: "",
    lastename: "",
    adresse: "",
    city: "",
    state: "",
  };

  constructor( private risqueService: RisqueService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategorieRisqueComponent>) {
    this.angForm = this.fb.group({
      NomCategorie: ['', [Validators.required]],
    });
  }


  public ngOnInit() {

  }

  ajoutercategorie(){
console.log(this.data);
    this.risqueService.saveCategoriesRisque(this.data).subscribe(
      resp=>{
        console.log(resp);
        return this.onNoClick();
      },error => {

        console.log(error);

        return error;
      }
    )
  }

  get f() {
    return this.angForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.angForm.invalid) {

      return;
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
