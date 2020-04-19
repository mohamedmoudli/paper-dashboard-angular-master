import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-help-process',
  templateUrl: './help-process.component.html',
  styleUrls: ['./help-process.component.css']
})
export class HelpProcessComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HelpProcessComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
