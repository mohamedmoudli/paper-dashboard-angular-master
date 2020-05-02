import {Component, Inject, OnInit} from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';

@Component({
  selector: 'app-delatecategorie-extern',
  templateUrl: './delatecategorie-extern.component.html',
  styleUrls: ['./delatecategorie-extern.component.css']
})
export class DelatecategorieExternComponent implements OnInit {



  constructor(private enjeuService: EnjeuService,
              private router:Router ,  public dialogRef: MatDialogRef<DelatecategorieExternComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.enjeuService.delateCategoryExternal(this.id).subscribe((data) => {
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
