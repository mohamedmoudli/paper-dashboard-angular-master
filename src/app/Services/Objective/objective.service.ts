import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObjectiveService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }


  public getObjective() {
    return this.http.get(this.host+"/GetObjectiveByAction");
  }

  public saveObjective(data) {
    return this.http.post(this.host+"/CreateObjective" , data);

  }
  public getAdvencementObjective() {
    return this.http.get(this.host+"/saveAvencementObjective");

  }

  public gethistoricalObjective() {
    return this.http.get(this.host+"/GethistoricalObjective");
  }

  public savehistoricalObjective() {
    return this.http.get(this.host+"/savehistoricalObjective");

  }

  public getProcessRisque() {
    return this.http.get(this.host+"/api/processes");

  }
  public getStake() {
    return this.http.get(this.host+"/api/stakes");

  }



}
