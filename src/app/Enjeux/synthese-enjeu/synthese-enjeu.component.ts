import { Component, OnInit } from '@angular/core';
import {EnjeuService} from '../../Services/Enjeu/enjeu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-synthese-enjeu',
  templateUrl: './synthese-enjeu.component.html',
  styleUrls: ['./synthese-enjeu.component.css']
})
export class SyntheseEnjeuComponent implements OnInit {
 Type : any;
  constructor(private enjeuxservice : EnjeuService,
              private router: Router) { }

  ngOnInit(): void {

  }

}
