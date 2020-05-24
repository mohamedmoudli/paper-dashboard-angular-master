import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SyntheseService {
  public host: string = "http://localhost:8000";

  constructor(private http: HttpClient) { }
  public GetNbreEtatRisque() {
    return this.http.get(this.host+"/GetNbreRiskState");

  }
  public GetNbreCategorieRisque() {
    return this.http.get(this.host+"/GetcategoryriskNumber");

  }
  public GetNbreEtatOpportunite() {
    return this.http.get(this.host+"/GetOpportunityNumberState");

  }
  public GetNbreCategorieOpportunite() {
    return this.http.get(this.host+"/GetOpportunityCategoryNumber");

  }
  public GetNbreCurrentStateActionPlan() {
    return this.http.get(this.host+"/CurrentStateNumber");

  }
  public GetNbreStateEfficacityActionPlan() {
    return this.http.get(this.host+"/EfficientStateNumber");

  }

  public GetNbreCurrentStateActionPlanbyProcess() {
    return this.http.get(this.host+"/CurrentStateNumberbyProcess");

  }
  public GetNbreAdvencementActionPlanbyProcess() {
    return this.http.get(this.host+"/AdvancementNumberbyProcess");

  }
  public GetTimeLimitAdvencementbyProcess() {
    return this.http.get(this.host+"/AdvancementNumberbyProcessbyTimeLimit");
  }
}
