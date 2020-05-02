import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajouter-categories-pi',
  templateUrl: './ajouter-categories-pi.component.html',
  styleUrls: ['./ajouter-categories-pi.component.css']
})
export class AjouterCategoriesPIComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    NameCategory: ''
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

  constructor( private partieinteresse: PartieinteresseService, private router: Router ,
  private fb:FormBuilder , public dialogRef: MatDialogRef<AjouterCategoriesPIComponent>) {
    this.angForm = this.fb.group({
      NameCategory: ['', [Validators.required]],
    });
  }


  public ngOnInit() {

  }

  ajoutercategorie(){

    this.partieinteresse.saveCategoryInterestedParty(this.data).subscribe(
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

