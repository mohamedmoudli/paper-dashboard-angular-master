import { Component, OnInit } from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-ajouter-exigence',
  templateUrl: './ajouter-exigence.component.html',
  styleUrls: ['./ajouter-exigence.component.css']
})
export class AjouterExigenceComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    EtatDeConfirmite: '',
    Commantaire: ''
  };

  constructor(private partieinteresse: PartieinteresseService ,
              private fb:FormBuilder , public dialogRef: MatDialogRef<AjouterExigenceComponent>) {
    this.angForm = this.fb.group({
      EtatDeConfirmite: ['', [Validators.required]],
      Commantaire: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }
  ajouterExigence(){
    this.partieinteresse.postExigencePI(this.data).subscribe(
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
