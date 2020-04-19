import {Component, Inject, OnInit} from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delateenjeu',
  templateUrl: './delateenjeu.component.html',
  styleUrls: ['./delateenjeu.component.css']
})
export class DelateenjeuComponent implements OnInit {


  constructor(private enjeuService: EnjeuService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateenjeuComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.enjeuService.delateEnjeu(this.id).subscribe((data) => {
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
