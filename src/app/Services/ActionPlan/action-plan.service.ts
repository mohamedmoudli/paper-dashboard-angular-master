import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionPlanService {
  public host: string = "http://localhost:8000";

  val: string;
  private PlanAction = new BehaviorSubject<any>(this.val);
  castPlanAction = this.PlanAction.asObservable();
  charingPlanAction(newUser){
    this.PlanAction.next(newUser);
    this.val = newUser ;
  }
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
    return this.http.post(this.host+"/CreatePlanAction", data1);

  }
  public getCurrentStateplanaction() {
    return this.http.get(this.host+"/api/current_state_action_plans");

  }
  public saveCurrentStateplanaction(data) {
    return this.http.post(this.host+"/api/current_state_action_plans", data);

  }
  public delateCurrentStateplanaction(id) {
    return this.http.delete(this.host+"/api/current_state_action_plans/"+id);

  }
  public getStateEfficacityActionPlan() {
    return this.http.get(this.host+"/api/state_efficacy_action_plans");

  }
  public saveStateEfficacityActionPlan(data) {
    return this.http.post(this.host+"/api/state_efficacy_action_plans" , data);

  }
  public delateStateEfficacityActionPlan(id) {
    return this.http.delete(this.host+"/api/state_efficacy_action_plans/"+id);

  }

}
