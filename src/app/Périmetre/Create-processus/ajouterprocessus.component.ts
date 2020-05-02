import { Component, OnInit } from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {ProcessusService} from '../../Services/Périmetre/processus.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajouterprocessus',
  templateUrl: './ajouterprocessus.component.html',
  styleUrls: ['./ajouterprocessus.component.css']
})
export class AjouterprocessusComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    Processus: '',
    IndicateurPerformance: '',
    Pilote: ''
  };

  constructor(private processusService: ProcessusService,
              private router:Router ,private fb:FormBuilder , public dialogRef: MatDialogRef<AjouterprocessusComponent> ) {
    this.angForm = this.fb.group({
      Processus: ['', [Validators.required]],
      IndicateurPerformance: ['', [Validators.required]],
      Pilote: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  CreateProcessus(){
    this.processusService.postprocess(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
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
