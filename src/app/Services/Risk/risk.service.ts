import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiskService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }


  public getStateRisk() {
    return this.http.get(this.host+"/api/state_risks");
  }

  public getRisk() {
    return this.http.get(this.host+"/getRisk");
  }

  public saveRisk(data) {
    return this.http.post(this.host+"/saveRisk" , data);

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
    return this.http.get(this.host+"/gethistoricalRisk");
  }
  public savehistoricalRisk() {
    return this.http.get(this.host+"/savehistoricalRisk");
  }

}
