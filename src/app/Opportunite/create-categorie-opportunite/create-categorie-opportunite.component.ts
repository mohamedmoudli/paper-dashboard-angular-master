import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';

@Component({
  selector: 'app-create-categorie-opportunite',
  templateUrl: './create-categorie-opportunite.component.html',
  styleUrls: ['./create-categorie-opportunite.component.css']
})
export class CreateCategorieOpportuniteComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  public data = {
    NameCategoryOpportunity: ''
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

  constructor( private opportuniteService: OpportuniteService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategorieOpportuniteComponent>) {
    this.angForm = this.fb.group({
      NameCategoryOpportunity: ['', [Validators.required]],
    });
  }


  public ngOnInit() {

  }

  savecategory(){
    console.log(this.data);
    this.opportuniteService.saveCategoryOpportunity(this.data).subscribe(
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
