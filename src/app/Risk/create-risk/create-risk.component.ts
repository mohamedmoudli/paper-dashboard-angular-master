import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RiskService} from '../../Services/Risk/risk.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-risk',
  templateUrl: './create-risk.component.html',
  styleUrls: ['./create-risk.component.css']
})
export class CreateRiskComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  categoryrisk: any ;
  Strategic: any ;
  Process: any ;
  StateRisk: any;
  public data = {
    Description: '',
    ShortTerm: '',
    MediumTerm: '',
    LongTerm: '',
    DateIdentification: '',
    Causes: '',
    Censequence: '',
    Gravity: '',
    Probability: '',
    Detectability: '',
    idprocess: '',
    idstrategic: '',
    idStateRisk: '',
    idcategory: '',
    Comment: ''
  };
  constructor(private riskService: RiskService,
              private router: Router , private fb : FormBuilder) {
    this.angForm = this.fb.group({
      Description: ['', [Validators.required]],
      DateIdentification: ['', [Validators.required]],
      Causes: ['', [Validators.required]],
      Censequence: ['', [Validators.required]],
      Gravity: ['', [Validators.required]],
      Probability: ['', [Validators.required]],
      Detectability: ['', [Validators.required]],
      idprocess: ['', [Validators.required]],
      idstrategic: ['', [Validators.required]],
      idStateRisk: ['', [Validators.required]],
      idcategory: ['', [Validators.required]],
      Durée: ['', [Validators.required]],
      Comment: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
    this.riskService.getCategoryRisk()
      .subscribe((data) => {

        this.categoryrisk = data['hydra:member'];
        console.log(this.categoryrisk);

      },error => {
        console.log(false);
      });
    this.riskService.getStateRisk()
      .subscribe((data) => {

        this.StateRisk = data['hydra:member'];
        console.log(this.StateRisk);

      },error => {
        console.log(false);
      });

    this.riskService.getStrategicRisk()
      .subscribe((data) => {

        this.Strategic = data['hydra:member'];
        console.log(this.Strategic);

      },error => {
        console.log(false);
      });
    this.riskService.getProcessRisk()
      .subscribe((data) => {

        this.Process = data['hydra:member'];
        console.log(this.Process);

      },error => {
        console.log(false);
      });
  }

  CreateRisk(){

    this.riskService.saveRisk(this.data).subscribe(
      resp=>{
        console.log(resp);
        console.log(true);
        this.router.navigate(['risque'])
      },error => {

        console.log(error);

        return error;
      }
    )
  }

  get f() {
    return this.angForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.angForm.invalid) {

      return;
    }
  }
}
