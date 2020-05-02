import {Component, Inject, OnInit} from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';

@Component({
  selector: 'app-delate-strategique-opportunite',
  templateUrl: './delate-strategique-opportunite.component.html',
  styleUrls: ['./delate-strategique-opportunite.component.css']
})
export class DelateStrategiqueOpportuniteComponent implements OnInit {



  constructor(private opportuniteService: OpportuniteService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStrategiqueOpportuniteComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.opportuniteService.delateStrategicOpportunity(this.id).subscribe((data) => {
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
