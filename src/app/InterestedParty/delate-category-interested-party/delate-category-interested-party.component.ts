import {Component, Inject, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-delate-category-interested-party',
  templateUrl: './delate-category-interested-party.component.html',
  styleUrls: ['./delate-category-interested-party.component.css']
})
export class DelateCategoryInterestedPartyComponent implements OnInit {

 categoryinterestedparty: any;
 itemcategory: any;
  constructor(private interestedPartyService: InterestedPartyService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateCategoryInterestedPartyComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty=> this.categoryinterestedparty = interestedParty);
    console.log(this.categoryinterestedparty);
  }


  public delate() {
    this.interestedPartyService.deleteCategory(this.data.id).subscribe((data) => {
      const index: number = this.categoryinterestedparty.indexOf(this.data);
      console.log(index);
      this.itemcategory = this.categoryinterestedparty.splice(index ,1);
      this.categoryinterestedparty = this.categoryinterestedparty.filter(user => user !== this.itemcategory);
      return this.onNoClick();
    }), (error) => {

      console.log("Error", error);
    };

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
