import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportuniteService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }

  public getStateOpportunity() {
    return this.http.get(this.host+"/api/etat_opportunites");
  }
  public getOpportunity() {
    return this.http.get(this.host+"/GetOpportunityByAction");
  }

  public saveOpportunity(data) {
    return this.http.post(this.host+"/CreateOppOrtunite" , data);

  }
  public getCategoryOpportunity() {
    return this.http.get(this.host+"/api/categorie_opportunites");

  }
  public saveCategoryOpportunity(data) {
    return this.http.post(this.host+"/api/categorie_opportunites" , data);

  }
  public delateCategoryOpportunity(id) {
    return this.http.delete(this.host+"/api/categorie_opportunites/"+id );

  }
  public getStrategicOpportunity() {
    return this.http.get(this.host+"/api/strategique_opportunites");

  }
  public saveStrategicOpportunity(data) {
    return this.http.post(this.host+"/api/strategique_opportunites" , data);

  }
  public delateStrategicOpportunity(id) {
    return this.http.delete(this.host+"/api/strategique_opportunites/"+id);

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
  public gethistoricalOpportunite() {
    return this.http.get(this.host+"/GethistoriqueOpportunite");
  }
  public savehistoricalOpportunite() {
    return this.http.get(this.host+"/savehistoriqueOpportunite");
  }

}
