import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProcessService} from '../../Services/Process/process.service';

@Component({
  selector: 'app-delate-process',
  templateUrl: './delate-process.component.html',
  styleUrls: ['./delate-process.component.css']
})
export class DelateProcessComponent implements OnInit {



  constructor(private processService: ProcessService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateProcessComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.processService.delateprocess(this.id).subscribe((data) => {
      console.log("ffffffffff");
      this.ngOnInit();
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
