import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-help-pi-relevant',
  templateUrl: './help-pi-relevant.component.html',
  styleUrls: ['./help-pi-relevant.component.css']
})
export class HelpPiRelevantComponent implements OnInit {

  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<HelpPiRelevantComponent>) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
