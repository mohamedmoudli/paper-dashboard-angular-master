import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-help-stake',
  templateUrl: './help-stake.component.html',
  styleUrls: ['./help-stake.component.css']
})
export class HelpStakeComponent implements OnInit {
  afficheaideEnjeu : any;
  constructor(public dialogRef: MatDialogRef<HelpStakeComponent>) { }

  ngOnInit(): void {
    this.afficheaideEnjeu = localStorage.getItem('aideEnjeu');
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
