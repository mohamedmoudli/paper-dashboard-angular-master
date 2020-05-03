import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GuideutilisationService} from '../../Services/guideUtilisation/guideutilisation.service';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-utilization-guide',
  templateUrl: './create-utilization-guide.component.html',
  styleUrls: ['./create-utilization-guide.component.css']
})
export class CreateUtilizationGuideComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  public data = {
    Nom: '',
    Role: '',
    Organisation: ''


  };

  constructor(private guideutilisationService: GuideutilisationService,
              private router:Router , private fb:FormBuilder ,  public dialogRef: MatDialogRef<CreateUtilizationGuideComponent>) {
    this.angForm = this.fb.group({
      nom: ['', [Validators.required]],
      role: ['', [Validators.required]],
      organisation: ['', [Validators.required]],



    });
  }

  ngOnInit(): void {
  }
  ajouterGuideUtilisation(){
    console.log(this.data);
    this.guideutilisationService.postGuideUtilisation(this.data).subscribe(
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
