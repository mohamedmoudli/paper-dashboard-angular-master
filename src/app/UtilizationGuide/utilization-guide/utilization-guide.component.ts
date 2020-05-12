import { Component, OnInit } from '@angular/core';
import {GuideutilisationService} from '../../Services/guideUtilisation/guideutilisation.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DelateUtilizationGuideComponent} from '../delate-utilization-guide/delate-utilization-guide.component';
import {CreateUtilizationGuideComponent} from '../create-utilization-guide/create-utilization-guide.component';

@Component({
  selector: 'app-utilization-guide',
  templateUrl: './utilization-guide.component.html',
  styleUrls: ['./utilization-guide.component.css']
})
export class UtilizationGuideComponent implements OnInit {
  public animal: string;
  guide: any ;

  public hidder = ["version", "Modification" , "Nom" ,"data"];
  public hidder1 = ["Nom", "Role" , "Organisation" ];
  constructor(private guideutilisation : GuideutilisationService,
              private router: Router , private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.guideutilisation.getGuideUtilisation()
      .subscribe((data) => {

        console.log(data);
        this.guide = data['hydra:member'];
        console.log(this.guide);
      }, error => {
        console.log(false);
      });
    this.guideutilisation.cast.subscribe(user => this.guide = user);
  }

  public CreateUtilizationGuideComponent(): void {
    this.charingThedata();
    const dialogRef = this.dialog.open(CreateUtilizationGuideComponent , {
      width: "500px",
      height: "450px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public DelateUtilizationGuideComponent(data): void {
    this.charingThedata();
    const dialogRef = this.dialog.open(DelateUtilizationGuideComponent, {
      width: "500px",
      height: "150px",
      data:data ,

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
  charingThedata(){
    this.guideutilisation.charingdata(this.guide);

  }
}
