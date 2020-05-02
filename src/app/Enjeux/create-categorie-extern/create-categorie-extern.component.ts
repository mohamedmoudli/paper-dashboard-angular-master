import { Component, OnInit } from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-categorie-extern',
  templateUrl: './create-categorie-extern.component.html',
  styleUrls: ['./create-categorie-extern.component.css']
})
export class CreateCategorieExternComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    NameCategoryStakExternal: ''
  };

  constructor(private enjeuxservice : EnjeuService,
              private router: Router , private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategorieExternComponent>) {
    this.angForm = this.fb.group({
      NameCategoryStakExternal: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }
  addcategorie(){
    this.enjeuxservice.CreateCategoryExternal(this.data).subscribe(
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
