import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlandeactionService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }

  public getplandeaction() {
    return this.http.get(this.host+"/GetPlanActionByAction");

  }
  public getObjective() {
    return this.http.get(this.host+"/GetObjectiveByAction");
  }
  public getOpportunity() {
    return this.http.get(this.host+"/GetOpportunityByAction");
  }
  public getExigencyIP() {
    return this.http.get(this.host+"/GetExigencyByAction");

  }
  public getRisk() {
    return this.http.get(this.host+"/getRisk");
  }

  public delateplandeaction(id) {
    return this.http.delete(this.host+"/api/plan_de_actions/"+id);

  }

  public saveplandeaction(data1) {
    console.log(data1);
    return this.http.post(this.host+"/CreatePlandeAction", data1);

  }
}
