import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.css']
})
export class Test6Component implements OnInit {



  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<Test6Component>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
