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
  Exigencyinterestedparty: any;
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
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty=> this.Exigencyinterestedparty = interestedParty);
    console.log(this.Exigencyinterestedparty);
  }
  CreateExigency(){
    this.charingTheExigency();
    this.interestedPartyService.SaveExigencyIP(this.data).subscribe(
      resp=>{
        console.log(this.Exigencyinterestedparty);
        this.Exigencyinterestedparty = this.Exigencyinterestedparty.push(this.data);
        console.log(this.Exigencyinterestedparty);
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
  charingTheExigency(){
    this.interestedPartyService.charingInterestedParty(this.Exigencyinterestedparty);

  }
}
