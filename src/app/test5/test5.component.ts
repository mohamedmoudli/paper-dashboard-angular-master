import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Test6Component} from '../test6/test6.component';
import {ObjectiveService} from '../Services/Objective/objective.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component implements OnInit {


  ELEMENT_DATA : any;
  animal: string;
  name: string;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
  constructor(private dialog: MatDialog , private objectiveService: ObjectiveService) {}

  ngOnInit(): void {
    this.objectiveService.getObjective()
      .subscribe((data) => {

        console.log(data);
        this.ELEMENT_DATA = data;
        console.log(this.ELEMENT_DATA);
      }, error => {
        console.log(false);
      });
  }

}
