import {Component, Inject, OnInit} from '@angular/core';
import {RisqueService} from '../../Services/Risque/risque.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OpportuniteService} from '../../Services/Opportunite/opportunite.service';

@Component({
  selector: 'app-delete-categorie-opportunite',
  templateUrl: './delete-categorie-opportunite.component.html',
  styleUrls: ['./delete-categorie-opportunite.component.css']
})
export class DeleteCategorieOpportuniteComponent implements OnInit {


  constructor(private opportuniteService: OpportuniteService,
              private router:Router ,  public dialogRef: MatDialogRef<DeleteCategorieOpportuniteComponent>,
              @Inject(MAT_DIALOG_DATA) public id:number) { }

  ngOnInit(): void {
  }


  public supp() {
    this.opportuniteService.delateCategoriesOpportunite(this.id).subscribe((data) => {
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
