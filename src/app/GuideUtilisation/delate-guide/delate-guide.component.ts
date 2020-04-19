import {Component, Inject, OnInit} from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GuideutilisationService} from '../../Services/guideUtilisation/guideutilisation.service';

@Component({
  selector: 'app-delate-guide',
  templateUrl: './delate-guide.component.html',
  styleUrls: ['./delate-guide.component.css']
})
export class DelateGuideComponent implements OnInit {


  constructor(private guideutilisationService: GuideutilisationService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateGuideComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
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
