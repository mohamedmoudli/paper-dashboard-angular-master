import {Component, Inject, OnInit} from '@angular/core';
import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';
import {Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-save-historical-interested-party',
  templateUrl: './save-historical-interested-party.component.html',
  styleUrls: ['./save-historical-interested-party.component.css']
})
export class SaveHistoricalInterestedPartyComponent implements OnInit {
  InterestedPartyRevalent :any;
  seul :any;
  constructor(private interestedPartyService: InterestedPartyService,
              private router:Router ,  public dialogRef: MatDialogRef<SaveHistoricalInterestedPartyComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.interestedPartyService.castinterestedParty.subscribe(interestedParty=> this.InterestedPartyRevalent = interestedParty);
    console.log(this.InterestedPartyRevalent);
  }

  savehistoricalInterestedParty() {
    this.seul = localStorage.getItem('seul');
    this.interestedPartyService.savehistoricalPI(this.seul)
      .subscribe((data) => {
          console.log(data);
          this.onNoClick();
        }, error => {

        }
      )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
