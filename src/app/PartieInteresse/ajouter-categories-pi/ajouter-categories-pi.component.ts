import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {PartieinteresseService} from '../../Services/partieinteresse.service';

@Component({
  selector: 'app-ajouter-categories-pi',
  templateUrl: './ajouter-categories-pi.component.html',
  styleUrls: ['./ajouter-categories-pi.component.css']
})
export class AjouterCategoriesPIComponent implements OnInit {
  id1: number;
  public data2: any = [];
  public data1: any = {
    id: "",
    fisrtname: "",
    lastename: "",
    adresse: "",
    city: "",
    state: "",
  };

  constructor( private prodsservice: PartieinteresseService, private router: Router) {

  }


  public ngOnInit() {

  }



}

