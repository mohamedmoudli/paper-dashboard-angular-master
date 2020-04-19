import { Component, OnInit } from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-categorie',
  templateUrl: './create-categorie.component.html',
  styleUrls: ['./create-categorie.component.css']
})
export class CreateCategorieComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    NomCategories: ''
  };

  constructor(private enjeuxservice : EnjeuService,
              private router: Router , private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategorieComponent>) {
    this.angForm = this.fb.group({
      NomCategories: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }
  addcategorie(){
    this.enjeuxservice.CreateCategoriesintern(this.data).subscribe(
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
