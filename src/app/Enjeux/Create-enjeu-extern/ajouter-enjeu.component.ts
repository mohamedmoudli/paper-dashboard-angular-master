import { Component, OnInit } from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-ajouter-enjeu',
  templateUrl: './ajouter-enjeu.component.html',
  styleUrls: ['./ajouter-enjeu.component.css']
})
export class AjouterEnjeuComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    Description: '',
    Type: '',
    CategoryStakeExternal: ''
  };
  public users = [];
  public Type = [];
  constructor(private enjeuService: EnjeuService,
              private router:Router , private fb:FormBuilder , public dialogRef: MatDialogRef<AjouterEnjeuComponent>) {
    this.angForm = this.fb.group({
      Description: ['', [Validators.required]],
      typeEnjeu: ['', [Validators.required]],
      categorieEnjeu: ['', [Validators.required]],



    });
  }

  ngOnInit(): void {

    this.enjeuService.getCategoryExternal()
      .subscribe((data) => {

        this.users = data['hydra:member'];
        console.log(this.users);

      },error => {
        console.log(false);
      });




    this.enjeuService.getTypeStake()
      .subscribe((data) => {

        this.Type = data['hydra:member'];
        console.log(this.users);

      },error => {
        console.log(false);
      });
  }


  saveEnjeuForce(){
    this.enjeuService.saveStake(this.data).subscribe(
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
