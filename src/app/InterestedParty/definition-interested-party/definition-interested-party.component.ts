import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-interested-party',
  templateUrl: './definition-interested-party.component.html',
  styleUrls: ['./definition-interested-party.component.css']
})
export class DefinitionInterestedPartyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DefinitionInterestedPartyComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
