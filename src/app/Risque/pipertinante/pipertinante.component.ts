import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {RisqueService} from '../../Services/Risque/risque.service';
import {PartieinteresseService} from '../../Services/partieinteresse.service';

@Component({
  selector: 'app-pipertinante',
  templateUrl: './pipertinante.component.html',
  styleUrls: ['./pipertinante.component.css']
})
export class PIpertinanteComponent implements OnInit {
  pipert: any ;
  public hidder = ["id", "nom pipertinante" ];

  constructor(
    public dialogRef: MatDialogRef<PIpertinanteComponent>,
    @Inject(MAT_DIALOG_DATA) public id:number, private activaterouter: ActivatedRoute , private partieinteresseService: PartieinteresseService ,private router:Router) {

  }

  ngOnInit(): void {
    if (!!localStorage.getItem('seul')) {
      const seul = localStorage.getItem('seul');
      this.partieinteresseService.getpipertinante(seul)
        .subscribe((data) => {
            console.log(data);
            this.pipert = data;
          }, error => {

          }
        )

    }
  }
  public onNoClick(): void {
    this.dialogRef.close();
  }

}
