import {Component, Inject, OnInit} from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-strategique-risque',
  templateUrl: './delate-strategique-risque.component.html',
  styleUrls: ['./delate-strategique-risque.component.css']
})
export class DelateStrategiqueRisqueComponent implements OnInit {


  constructor(private risqueService: RisqueService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateStrategiqueRisqueComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.risqueService.delateStrategicRisk(this.id).subscribe((data) => {
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
