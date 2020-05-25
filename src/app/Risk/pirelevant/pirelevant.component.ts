import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';

import {InterestedPartyService} from '../../Services/InterestedParty/interested-party.service';

@Component({
  selector: 'app-pirelevant',
  templateUrl: './pirelevant.component.html',
  styleUrls: ['./pirelevant.component.css']
})
export class PIRelevantComponent implements OnInit {
  interestedpartyRevelant: any ;
  public hidder = ["id", "nom pipertinante" ];

  constructor(
    public dialogRef: MatDialogRef<PIRelevantComponent>,
    @Inject(MAT_DIALOG_DATA) public id:number, private activaterouter: ActivatedRoute , private interestedPartyService: InterestedPartyService ,private router:Router) {

  }

  ngOnInit(): void {
    if (!!localStorage.getItem('seul')) {
      const seul = localStorage.getItem('seul');
      this.interestedPartyService.getInterestedPartyRelevant(seul)
        .subscribe((data) => {
            console.log(data);
            this.interestedpartyRevelant = data;
          }, error => {

          }
        )

    }
  }
  public onNoClick(): void {
    this.dialogRef.close();
  }
}
