import {Component, Inject, OnInit} from '@angular/core';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delate-interested-party',
  templateUrl: './delate-interested-party.component.html',
  styleUrls: ['./delate-interested-party.component.css']
})
export class DelateInterestedPartyComponent implements OnInit {
interestedparty: any;
  itemPi: any;
  constructor(private interestedPartyService: InterestedPartyService,
              private router:Router ,  public dialogRef: MatDialogRef<DelateInterestedPartyComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty=> this.interestedparty = interestedParty);
    console.log(this.interestedparty);
  }


  public delate() {
    this.interestedPartyService.deleteInterestedParty(this.data.id).subscribe((data) => {
      console.log("ffffffffff");
      const index: number = this.interestedparty.indexOf(this.data);
      console.log(index);
      this.itemPi = this.interestedparty.splice(index ,1);
      this.interestedparty = this.interestedparty.filter(user => user !== this.itemPi);
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
