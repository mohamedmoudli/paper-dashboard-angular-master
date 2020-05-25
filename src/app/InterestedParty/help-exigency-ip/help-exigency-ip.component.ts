import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-help-exigency-ip',
  templateUrl: './help-exigency-ip.component.html',
  styleUrls: ['./help-exigency-ip.component.css']
})
export class HelpExigencyIpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HelpExigencyIpComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
