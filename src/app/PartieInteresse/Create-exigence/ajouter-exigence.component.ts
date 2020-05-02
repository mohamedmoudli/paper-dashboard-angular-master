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
    StateOfConfirmity: '',
    Comment: ''
  };

  constructor(private partieinteresse: PartieinteresseService ,
              private fb:FormBuilder , public dialogRef: MatDialogRef<AjouterExigenceComponent>) {
    this.angForm = this.fb.group({
      StateOfConfirmity: ['', [Validators.required]],
      Comment: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
  }
  ajouterExigence(){
    this.partieinteresse.SaveExigencyIP(this.data).subscribe(
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
