import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-pirelevant',
  templateUrl: './definition-pirelevant.component.html',
  styleUrls: ['./definition-pirelevant.component.css']
})
export class DefinitionPIRelevantComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<DefinitionPIRelevantComponent>) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
