import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {RiskService} from '../../Services/Risk/risk.service';

@Component({
  selector: 'app-create-strategic-risk',
  templateUrl: './create-strategic-risk.component.html',
  styleUrls: ['./create-strategic-risk.component.css']
})
export class CreateStrategicRiskComponent implements OnInit {
  StrategicRisk: any;
  angForm: FormGroup;
  submitted = false;
  public data = {
    NameStrategicRisk: ''
  };


  constructor( private riskService: RiskService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStrategicRiskComponent>) {
    this.angForm = this.fb.group({
      NameStrategicRisk: ['', [Validators.required]],
    });
  }


  public ngOnInit() {
    this.riskService.castRisk.subscribe(Risk=> this.StrategicRisk = Risk);
    console.log(this.StrategicRisk);
  }

  createStrategic(){
    this.charingTheStrategicRisk();
    console.log(this.data);
    this.riskService.saveStrategicRisk(this.data).subscribe(
      resp=>{
        console.log(this.StrategicRisk);
        this.StrategicRisk = this.StrategicRisk.push(this.data);
        console.log(this.StrategicRisk);
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
  charingTheStrategicRisk(){
    this.riskService.charingRisk(this.StrategicRisk);

  }
}
