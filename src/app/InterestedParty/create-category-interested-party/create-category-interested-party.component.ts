import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-create-category-interested-party',
  templateUrl: './create-category-interested-party.component.html',
  styleUrls: ['./create-category-interested-party.component.css']
})
export class CreateCategoryInterestedPartyComponent implements OnInit {
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

  constructor( private interestedPartyService: InterestedPartyService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateCategoryInterestedPartyComponent>) {
    this.angForm = this.fb.group({
      NameCategory: ['', [Validators.required]],
    });
  }


  public ngOnInit() {

  }

  Createcategory(){

    this.interestedPartyService.saveCategoryInterestedParty(this.data).subscribe(
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