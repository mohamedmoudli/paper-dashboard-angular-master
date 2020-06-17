import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SyntheseService {
  public host: string = "http://localhost:8000";

  constructor(private http: HttpClient) { }
  public getStake() {
    return this.http.get(this.host+"/api/stakes");

  }
  public gethistoricalObjective() {
    return this.http.get(this.host+"/GethistoricalObjective");
  }
  public gethistoricalObjectivebyStake(Stake) {
    return this.http.get(this.host+"/GethistoricalObjectivebyStake/"+Stake);
  }
  public gethistoricalObjectivebyStakebyDescription(Stake, Description) {
    return this.http.get(this.host+"/GethistoricalObjectivebyDescription/"+Stake+"/"+Description);
  }

  public GetStateRiskNumber() {
    return this.http.get(this.host+"/GetNbreRiskState");

  }
  public GetCategoryRiskNumber() {
    return this.http.get(this.host+"/GetcategoryriskNumber");

  }
  public GetStateOpportunityNumber() {
    return this.http.get(this.host+"/GetOpportunityNumberState");

  }
  public GetCategoryOpportunityNumber() {
    return this.http.get(this.host+"/GetOpportunityCategoryNumber");

  }
  public GetCurrentStateActionPlanNumber() {
    return this.http.get(this.host+"/CurrentStateNumber");

  }
  public GetStateEfficacityActionPlanNumber() {
    return this.http.get(this.host+"/EfficientStateNumber");

  }

  public GetCurrentStateActionPlanbyProcessNumber() {
    return this.http.get(this.host+"/CurrentStateNumberbyProcess");

  }
  public GetAdvencementActionPlanbyProcessNumber() {
    return this.http.get(this.host+"/AdvancementNumberbyProcess");

  }
  public GetTimeLimitAdvencementbyProcess() {
    return this.http.get(this.host+"/AdvancementNumberbyProcessbyTimeLimit");
  }
  public GetDelaibyprocess() {
    return this.http.get(this.host+"/Delaibyprocess");
  }
}
