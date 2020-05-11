import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RiskService} from '../../Services/Risk/risk.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-state-risk',
  templateUrl: './create-state-risk.component.html',
  styleUrls: ['./create-state-risk.component.css']
})
export class CreateStateRiskComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  StateRisk : any;
  public data = {
    NameStateRisk: ''
  };


  constructor( private riskService: RiskService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStateRiskComponent>) {
    this.angForm = this.fb.group({
      NameStateRisk: ['', [Validators.required]],
    });
  }


  public ngOnInit() {
    this.riskService.castRisk.subscribe(Risk=> this.StateRisk = Risk);
    console.log(this.StateRisk);
  }

  createState(){
    this.charingTheStateRisk();
    console.log(this.data);
    this.riskService.saveStateRisk(this.data).subscribe(
      resp=>{
        console.log(this.StateRisk);
        this.StateRisk = this.StateRisk.push(this.data);
        console.log(this.StateRisk);
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

  charingTheStateRisk(){
    this.riskService.charingRisk(this.StateRisk);
  }
}
