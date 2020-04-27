import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlandeactionService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }

  public getplandeaction() {
    return this.http.get(this.host+"/GetPlanDeActionByAction");

  }
  public getObjective() {
    return this.http.get(this.host+"/GetObjectiveByAction");
  }
  public getOpportunite() {
    return this.http.get(this.host+"/GetOpportuniteByAction");
  }
  public getExigencePI() {
    return this.http.get(this.host+"/GetExigenceByAction");

  }
  public getRisque() {
    return this.http.get(this.host+"/GetRisqueByAction");
  }

  public delateplandeaction(id) {
    return this.http.delete(this.host+"/api/plan_de_actions/"+id);

  }

  public saveplandeaction(data1) {
    console.log(data1);
    return this.http.post(this.host+"/CreatePlandeAction", data1);

  }
}
