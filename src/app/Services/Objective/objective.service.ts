import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectiveService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }

  val: string;
  private Objective = new BehaviorSubject<any>(this.val);
  castObjective = this.Objective.asObservable();
  charingObjective(newUser){
    this.Objective.next(newUser);
    this.val = newUser ;
  }

  public getObjective() {
    return this.http.get(this.host+"/GetObjective");
  }

  public saveObjective(data) {
    return this.http.post(this.host+"/CreateObjective" , data);

  }
  public getAdvencementObjective() {
    return this.http.get(this.host+"/SaveAdvancementObjective");

  }

  public gethistoricalObjective() {
    return this.http.get(this.host+"/api/historical_objectives");
  }

  public savehistoricalObjective() {
    return this.http.get(this.host+"/savehistoricalObjective");

  }
  public delatehistoricalObjective(id) {
    return this.http.delete(this.host+"/api/historical_objectives/"+id);
  }

  public getProcessRisque() {
    return this.http.get(this.host+"/api/processes");

  }
  public getStake() {
    return this.http.get(this.host+"/api/stakes");

  }



}
