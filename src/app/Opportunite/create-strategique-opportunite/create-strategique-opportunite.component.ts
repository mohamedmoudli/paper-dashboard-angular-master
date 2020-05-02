import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';

@Component({
  selector: 'app-create-strategique-opportunite',
  templateUrl: './create-strategique-opportunite.component.html',
  styleUrls: ['./create-strategique-opportunite.component.css']
})
export class CreateStrategiqueOpportuniteComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    NomStrategique: ''
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
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStrategiqueOpportuniteComponent>) {
    this.angForm = this.fb.group({
      nomSrategique: ['', [Validators.required]],
    });
  }


  public ngOnInit() {

  }

  createStrategique(){
    console.log(this.data);
    this.opportuniteService.saveStrategicOpportunity(this.data).subscribe(
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
