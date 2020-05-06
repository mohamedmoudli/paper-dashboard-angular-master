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
guide:any;
guideitem:any;

  constructor(private guideutilisationService: GuideutilisationService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateUtilizationGuideComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.guideutilisationService.cast.subscribe(user=> this.guide = user);
    console.log(this.guide);
  }


  public delate() {
    this.guideutilisationService.delateGuideUtilisation(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.guide.indexOf(this.data);
      console.log(index);
      this.guideitem = this.guide.splice(index ,1);
      this.guide = this.guide.filter(user => user !== this.guideitem);
      this.ngOnInit();
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  charingThedata(){
    this.guideutilisationService.charingdata(this.guide);

  }
}
