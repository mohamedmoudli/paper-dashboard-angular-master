import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-definition-pipertinante',
  templateUrl: './definition-pipertinante.component.html',
  styleUrls: ['./definition-pipertinante.component.css']
})
export class DefinitionPIPertinanteComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<DefinitionPIPertinanteComponent>) { }

  ngOnInit(): void {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
