import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SyntheseService {
  public host: string = "http://localhost:8000";

  constructor(private http: HttpClient) { }
  public GetNbreEtatRisque() {
    return this.http.get(this.host+"/GetNbreEtatRisque");

  }
  public GetNbreCategorieRisque() {
    return this.http.get(this.host+"/GetNbreCategorieRisque");

  }
  public GetNbreEtatOpportunite() {
    return this.http.get(this.host+"/GetNbreEtatOpportunite");

  }
  public GetNbreCategorieOpportunite() {
    return this.http.get(this.host+"/GetNbreCategorieOpportunite");

  }
}