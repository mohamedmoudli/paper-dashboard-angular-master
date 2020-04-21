import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RisqueService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }


  public getRisque() {
    return this.http.get(this.host+"/GetRisqueByAction");
  }

  public saveRisque(data) {
    return this.http.post(this.host+"/getRisque" , data);

  }
  public getCategoriesRisque() {
    return this.http.get(this.host+"/api/categorie_risques");

  }
  public saveCategoriesRisque(data) {
    return this.http.post(this.host+"/api/categorie_risques" , data);

  }
  public delateCategoriesRisque(id) {
    return this.http.delete(this.host+"/api/categorie_risques/"+id );

  }
  public getStrategiqueRisque() {
    return this.http.get(this.host+"/api/strategique_risques");

  }
  public saveStrategiqueRisque(data) {
    return this.http.post(this.host+"/api/strategique_risques" , data);

  }
  public delateStrategiqueRisque(id) {
    return this.http.delete(this.host+"/api/strategique_risques/"+id);

  }
  public getProcessRisque() {
    return this.http.get(this.host+"/api/processuses");

  }
  public getEnjeu() {
    return this.http.get(this.host+"/api/enjeus");

  }
  public getHistoriqueRisque() {
    return this.http.get(this.host+"/GethistoriqueRisque");
  }
  public saveHistoriqueRisque() {
    return this.http.get(this.host+"/savehistoriqueRisque");
  }

}
