import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-delate-exigency-interested-party',
  templateUrl: './delate-exigency-interested-party.component.html',
  styleUrls: ['./delate-exigency-interested-party.component.css']
})
export class DelateExigencyInterestedPartyComponent implements OnInit {

  exigency: any;
  itemexigency: any;
  constructor(private interestedPartyService: InterestedPartyService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateExigencyInterestedPartyComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty=> this.exigency = interestedParty);
    console.log(this.exigency);
  }
  public delate() {

    this.interestedPartyService.deleteExigency(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      console.log("ffffffffff");
      const index: number = this.exigency.indexOf(this.data);
      console.log(index);
      this.itemexigency = this.exigency.splice(index ,1);
      this.exigency = this.exigency.filter(user => user !== this.itemexigency);
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
