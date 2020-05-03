import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-create-exigency-interested-party',
  templateUrl: './create-exigency-interested-party.component.html',
  styleUrls: ['./create-exigency-interested-party.component.css']
})
export class CreateExigencyInterestedPartyComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    StateOfConfirmity: '',
    Comment: ''
  };

  constructor(private interestedPartyService: InterestedPartyService ,
              private fb:FormBuilder , public dialogRef: MatDialogRef<CreateExigencyInterestedPartyComponent>) {
    this.angForm = this.fb.group({
      StateOfConfirmity: ['', [Validators.required]],
      Comment: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }
  CreateExigency(){
    this.interestedPartyService.SaveExigencyIP(this.data).subscribe(
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
