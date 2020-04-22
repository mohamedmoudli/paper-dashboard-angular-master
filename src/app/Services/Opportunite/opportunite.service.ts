import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpportuniteService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }


  public getOpportunite() {
    return this.http.get(this.host+"/GetOpportuniteByAction");
  }

  public saveOpportunite(data) {
    return this.http.post(this.host+"/CreateOppOrtunite" , data);

  }
  public getCategoriesOpportunite() {
    return this.http.get(this.host+"/api/categorie_opportunites");

  }
  public saveCategoriesOpportunite(data) {
    return this.http.post(this.host+"/api/categorie_opportunites" , data);

  }
  public delateCategoriesOpportunite(id) {
    return this.http.delete(this.host+"/api/categorie_opportunites/"+id );

  }
  public getStrategiqueOpportunite() {
    return this.http.get(this.host+"/api/strategique_opportunites");

  }
  public saveStrategiqueOpportunite(data) {
    return this.http.post(this.host+"/api/strategique_opportunites" , data);

  }
  public delateStrategiqueOpportunite(id) {
    return this.http.delete(this.host+"/api/strategique_opportunites/"+id);

  }
  public getProcessRisque() {
    return this.http.get(this.host+"/api/processuses");

  }
  public getEnjeu() {
    return this.http.get(this.host+"/api/enjeus");

  }
  public reevaluationOpportinute(id , data) {
    return this.http.post(this.host+"/UpdateOppOrtunite/"+id , data);

  }
  public getHistoriqueOpportunite() {
    return this.http.get(this.host+"/GethistoriqueOpportunite");
  }
  public saveHistoriqueOpportunite() {
    return this.http.get(this.host+"/savehistoriqueOpportunite");
  }

}
