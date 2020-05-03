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
  users: any ;
  public hidder = ["nom", "role" , "organisation"];
  constructor(private guideutilisation : GuideutilisationService,
              private router: Router , private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.guideutilisation.getGuideUtilisation()
      .subscribe((data) => {

        console.log(data);
        this.users = data['hydra:member'];
        console.log(this.users);
      }, error => {
        console.log(false);
      });
  }

  public CreateUtilizationGuideComponent(): void {

    const dialogRef = this.dialog.open(CreateUtilizationGuideComponent , {
      width: "500px",
      height: "450px",

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }


  public DelateUtilizationGuideComponent(id): void {

    const dialogRef = this.dialog.open(DelateUtilizationGuideComponent, {
      width: "500px",
      height: "150px",
      data:id

    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
      this.animal = result;
    });
  }
}
