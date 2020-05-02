import { Component, OnInit } from '@angular/core';
import {PartieinteresseService} from '../../Services/partieinteresse.service';
import {Router} from '@angular/router';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-enjeu-force',
  templateUrl: './enjeu-force.component.html',
  styleUrls: ['./enjeu-force.component.css']
})
export class EnjeuForceComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    Description: '',
    Type: '',
    CategoryStakeInternal: ''
  };
  public users = [];
  public Type = [];
  constructor(private enjeuService: EnjeuService,
              private router:Router , private fb:FormBuilder , public dialogRef: MatDialogRef<EnjeuForceComponent>) {
    this.angForm = this.fb.group({
      Description: ['', [Validators.required]],
      Type: ['', [Validators.required]],
      CategoryStakeInternal: ['', [Validators.required]],



    });
  }

  ngOnInit(): void {

    this.enjeuService.getCategoryInternal()
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
