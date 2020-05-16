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
  Process:any;
  itemProcess:any;


  constructor(private processService: ProcessService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateProcessComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.processService.castProcess.subscribe(Process=> this.Process = Process);
    console.log(this.Process);
  }


  public delate() {
    this.processService.delateprocess(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.Process.indexOf(this.data);
      console.log(index);
      this.itemProcess = this.Process.splice(index ,1);
      this.Process = this.Process.filter(user => user !== this.itemProcess);
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
