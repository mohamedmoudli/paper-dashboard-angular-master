import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';
import {ProcessService} from '../../Services/Process/process.service';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.css']
})
export class CreateProcessComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  Process:any;
  public data = {
    Process: '',
    PerformanceIndicator: '',
    Pilot: ''
  };

  constructor(private processService: ProcessService,
              private router:Router ,private fb:FormBuilder , public dialogRef: MatDialogRef<CreateProcessComponent> ) {
    this.angForm = this.fb.group({
      Process: ['', [Validators.required]],
      PerformanceIndicator: ['', [Validators.required]],
      Pilot: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.processService.castProcess.subscribe(Process=> this.Process = Process);
    console.log(this.Process);
  }

  CreateProcess(){
    this.charingTheProcess();
    this.processService.postprocess(this.data).subscribe(
      resp=>{
        console.log(this.Process);
        this.Process = this.Process.push(this.data);
        console.log(this.Process);
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

  charingTheProcess(){
    this.processService.charingProcess(this.Process);

  }
}
