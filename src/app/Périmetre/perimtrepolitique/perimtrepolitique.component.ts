import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ProcessusService} from '../../Services/Périmetre/processus.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-perimtrepolitique',
  templateUrl: './perimtrepolitique.component.html',
  styleUrls: ['./perimtrepolitique.component.css']
})
export class PerimtrepolitiqueComponent implements OnInit {

  constructor( private processusService : ProcessusService,
               private router: Router , public dialogRef: MatDialogRef<PerimtrepolitiqueComponent> ,
  @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public updateperimetre(data) {

    this.processusService.updateperietre(this.id , data).subscribe((data) => {
      console.log("ffffffffff");
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
