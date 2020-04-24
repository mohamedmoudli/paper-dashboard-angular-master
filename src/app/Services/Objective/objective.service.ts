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
  public getAvencementObjective() {
    return this.http.get(this.host+"/saveAvencementObjective");

  }

  public getHistoriqueObjective() {
    return this.http.get(this.host+"/GethistoriqueObjective");
  }

  public saveHistoriqueObjective() {
    return this.http.get(this.host+"/savehistoriqueObjective");

  }

  public getProcessRisque() {
    return this.http.get(this.host+"/api/processuses");

  }
  public getEnjeu() {
    return this.http.get(this.host+"/api/enjeus");

  }



}
