import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-enjeux',
  templateUrl: './definition-enjeux.component.html',
  styleUrls: ['./definition-enjeux.component.css']
})
export class DefinitionEnjeuxComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<DefinitionEnjeuxComponent>) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
