import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-strategique-risque',
  templateUrl: './create-strategique-risque.component.html',
  styleUrls: ['./create-strategique-risque.component.css']
})
export class CreateStrategiqueRisqueComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    NomSrategique: ''
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

  constructor( private risqueService: RisqueService, private router: Router ,
               private fb:FormBuilder , public dialogRef: MatDialogRef<CreateStrategiqueRisqueComponent>) {
    this.angForm = this.fb.group({
      nomSrategique: ['', [Validators.required]],
    });
  }


  public ngOnInit() {

  }

  createStrategique(){
    console.log(this.data);
    this.risqueService.saveStrategiqueRisque(this.data).subscribe(
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
