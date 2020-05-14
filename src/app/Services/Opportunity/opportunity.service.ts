import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {
  val: string;
  private Opportunity = new BehaviorSubject<any>(this.val);
  castOpportunity = this.Opportunity.asObservable();
  charingOpportunity(newUser){
    this.Opportunity.next(newUser);
    this.val = newUser ;
  }
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }

  public getStateOpportunity() {
    return this.http.get(this.host+"/api/state_opportunities");
  }
  public saveStateOpportunity(data) {
    return this.http.post(this.host+"/api/state_opportunities" , data);
  }
  public delateStateOpportunity(id) {
    return this.http.delete(this.host+"/api/state_opportunities/"+id );
  }
  public getOpportunity() {
    return this.http.get(this.host+"/GetOpportunityByAction");
  }

  public saveOpportunity(data) {
    return this.http.post(this.host+"/CreateOppOrtunite" , data);

  }
  public getCategoryOpportunity() {
    return this.http.get(this.host+"/api/category_opportunities");

  }
  public saveCategoryOpportunity(data) {
    return this.http.post(this.host+"/api/category_opportunities" , data);

  }
  public delateCategoryOpportunity(id) {
    return this.http.delete(this.host+"/api/category_opportunities/"+id );

  }
  public getStrategicOpportunity() {
    return this.http.get(this.host+"/api/strategic_opportunities");

  }
  public saveStrategicOpportunity(data) {
    return this.http.post(this.host+"/api/strategic_opportunities" , data);

  }
  public delateStrategicOpportunity(id) {
    return this.http.delete(this.host+"/api/strategic_opportunities/"+id);

  }
  public getProcessRisk() {
    return this.http.get(this.host+"/api/processes");

  }
  public getStake() {
    return this.http.get(this.host+"/api/stakes");

  }
  public reevaluationOpportinuty(id , data) {
    return this.http.post(this.host+"/UpdateOppOrtunity/"+id , data);

  }
  public gethistoricalOpportunity() {
    return this.http.get(this.host+"/api/historical_opportunities");
  }
  public savehistoricalOpportunite() {
    return this.http.get(this.host+"/savehistoricalOpportunity");
  }
  public delatehistoricalOpportunity(id) {
    return this.http.delete(this.host+"/api/historical_opportunities/"+id);
  }

}
