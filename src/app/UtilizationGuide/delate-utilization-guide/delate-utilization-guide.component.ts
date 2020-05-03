import {Component, Inject, OnInit} from '@angular/core';
import {GuideutilisationService} from '../../Services/guideUtilisation/guideutilisation.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-utilization-guide',
  templateUrl: './delate-utilization-guide.component.html',
  styleUrls: ['./delate-utilization-guide.component.css']
})
export class DelateUtilizationGuideComponent implements OnInit {


  constructor(private guideutilisationService: GuideutilisationService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateUtilizationGuideComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public delate() {
    this.guideutilisationService.delateGuideUtilisation(this.id).subscribe((data) => {
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
