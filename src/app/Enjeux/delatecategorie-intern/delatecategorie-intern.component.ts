import {Component, Inject, OnInit} from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';

@Component({
  selector: 'app-delatecategorie-intern',
  templateUrl: './delatecategorie-intern.component.html',
  styleUrls: ['./delatecategorie-intern.component.css']
})
export class DelatecategorieInternComponent implements OnInit {


  constructor(private enjeuService: EnjeuService,
              private router:Router ,  public dialogRef: MatDialogRef<DelatecategorieInternComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.enjeuService.delateCategoryInternal(this.id).subscribe((data) => {
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
