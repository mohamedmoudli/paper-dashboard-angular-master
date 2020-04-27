import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-aide-pipertinante',
  templateUrl: './aide-pipertinante.component.html',
  styleUrls: ['./aide-pipertinante.component.css']
})
export class AidePIPertinanteComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<AidePIPertinanteComponent>) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
