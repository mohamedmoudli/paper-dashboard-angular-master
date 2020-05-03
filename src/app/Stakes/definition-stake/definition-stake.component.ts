import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-stake',
  templateUrl: './definition-stake.component.html',
  styleUrls: ['./definition-stake.component.css']
})
export class DefinitionStakeComponent implements OnInit {

  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<DefinitionStakeComponent>) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
