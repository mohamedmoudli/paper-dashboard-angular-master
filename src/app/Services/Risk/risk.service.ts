import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RiskService {
  val: string;
  private Risk = new BehaviorSubject<any>(this.val);
  castRisk = this.Risk.asObservable();
  charingRisk(newUser){
    this.Risk.next(newUser);
    this.val = newUser ;
  }

  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }


  public getStateRisk() {
    return this.http.get(this.host+"/api/state_risks");
  }
  public saveStateRisk(data) {
    return this.http.post(this.host+"/api/state_risks" , data);
  }
  public delateStateRisk(id) {
    return this.http.delete(this.host+"/api/state_risks/"+id);
  }
  public getRisk() {
    return this.http.get(this.host+"/GetRisk");
  }

  public saveRisk(data) {
    return this.http.post(this.host+"/createRisk" , data);

  }
  public getCategoryRisk() {
    return this.http.get(this.host+"/api/category_risks");

  }
  public saveCategoryRisk(data) {
    return this.http.post(this.host+"/api/category_risks" , data);

  }
  public delateCategoryRisk(id) {
    return this.http.delete(this.host+"/api/category_risks/"+id );

  }
  public getStrategicRisk() {
    return this.http.get(this.host+"/api/strategic_risks");

  }
  public saveStrategicRisk(data) {
    return this.http.post(this.host+"/api/strategic_risks" , data);

  }
  public delateStrategicRisk(id) {
    return this.http.delete(this.host+"/api/strategic_risks/"+id);

  }
  public getProcessRisk() {
    return this.http.get(this.host+"/api/processes");

  }
  public getstake() {
    return this.http.get(this.host+"/api/stakes");

  }
  public gethistoricalRisk() {
    return this.http.get(this.host+"/api/historical_risks");
  }
  public savehistoricalRisk() {
    return this.http.get(this.host+"/savehistoricalRisk");
  }
  public delatehistoricalRisk(id) {
    return this.http.delete(this.host+"/api/historical_risks/"+id);
  }

}
