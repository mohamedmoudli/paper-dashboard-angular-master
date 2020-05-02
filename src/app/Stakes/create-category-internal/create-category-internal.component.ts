import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-category-internal',
  templateUrl: './create-category-internal.component.html',
  styleUrls: ['./create-category-internal.component.css']
})
export class CreateCategoryInternalComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;
  public data = {
    NameCategoryStakeInternal: ''
  };

  constructor(private enjeuxservice : EnjeuService,
              private router: Router , private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategoryInternalComponent>) {
    this.angForm = this.fb.group({
      NameCategoryStakeInternal: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }
  addcategorie(){
    this.enjeuxservice.CreateCategoryinternal(this.data).subscribe(
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
