import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {RisqueService} from '../../Services/Risque/risque.service';


@Component({
  selector: 'app-enjeu-rique',
  templateUrl: './enjeu-rique.component.html',
  styleUrls: ['./enjeu-rique.component.css']
})
export class EnjeuRiqueComponent implements OnInit {
  Enjeu: any ;
  public hidder = ["id", "description" ];

  constructor(
    public dialogRef: MatDialogRef<EnjeuRiqueComponent>,
    @Inject(MAT_DIALOG_DATA) public id:number, private activaterouter: ActivatedRoute , private risqueService: RisqueService ,private router:Router) {

  }

  ngOnInit(): void {
    this.risqueService.getstake()
      .subscribe((data) => {

        console.log(data);
        this.Enjeu = data['hydra:member'];
        console.log(this.Enjeu);
      }, error => {
        console.log(false);
      });
  }
  public onNoClick(): void {
    this.dialogRef.close();
  }



}
