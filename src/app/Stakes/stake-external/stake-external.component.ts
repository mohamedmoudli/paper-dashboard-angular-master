import { Component, OnInit } from '@angular/core';
import {StakeService} from '../../Services/Stake/stake.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stake-external',
  templateUrl: './stake-external.component.html',
  styleUrls: ['./stake-external.component.css']
})
export class StakeExternalComponent implements OnInit {

  constructor(private stakeService: StakeService,
              private router:Router) { }

  ngOnInit(): void {
  }

}
