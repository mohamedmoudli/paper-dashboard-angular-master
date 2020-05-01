import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartieinteresseService {
  public host: string = "http://localhost:8000";
  public host1: string = "http://localhost:8080/api/savecustumer";
  public host8: string = "http://localhost:8080/api/custumers/";
  public host9: string = "http://localhost:8080/api/client/";



  constructor(private http: HttpClient) {
  }
  public getCategoryInterestedParty() {
    return this.http.get(this.host+"/api/categorye_interested_parties");

  }

  public getCategoryByInterestedParty() {
    return this.http.get(this.host+"/partieinteresse/cat1");

  }
  public getNbreCategory() {
    return this.http.get(this.host+"/nbreCategories");

  }

  public saveCategoryInterestedParty(data1) {
    console.log(data1);
    return this.http.post(this.host+"/api/categorye_interested_parties", data1);

  }

  public deleteCategory(id: number){
    return this.http.delete(this.host+"/api/categorye_interested_parties/"+id);
  }

  public SaveInterestedParty(data) {
    return this.http.post(this.host+"/api/interseted_parties",data);

  }

  public SaveExigencyIP(data) {
    return this.http.post(this.host+"/api/exigency_interested_parties",data);

  }
  public getExigencyPI() {
    return this.http.get(this.host+"/GetExigenceByAction");

  }




  public getInteresetedParty() {
    return this.http.get(this.host+"/api/interseted_parties");

  }

  public getLoadsbyid(id , data) {
    console.log(this.http.post(this.host+"/getPoids/"+id ,data));

    return this.http.post(this.host+"/getPoids/"+id ,data);

  }

  public getpipertinante(id) {
    console.log(id);
    return this.http.get(this.host+"/pipertinante/"+id);

  }
  public getInterestedPartybyid(id) {
    console.log(id);
    return this.http.get(this.host+"/partieinteresse/cat/"+id);

  }

  public getNameCategory() {
    return this.http.get(this.host+"/getNomCategorie");

  }
  public deleteInterestedParty(id) {
    return this.http.delete(this.host+"/api/interseted_parties/"+id);

  }

  public deleteExigency(id) {
    return this.http.delete(this.host+"/api/exigency_interested_parties/"+id);

  }
  public updateInterestedParty(id) {
    return this.http.delete(this.host+"/api/interseted_parties/"+id);

  }

  public savehistoricalPI(seul) {
    return this.http.get(this.host+"/savehistorique/"+seul);

  }

  public gethistoricalPI() {
    return this.http.get(this.host+"/api/historical_interseted_parties");

  }

  public deletehistorical(id) {
    return this.http.delete(this.host+"/api/historical_interseted_parties/"+id);

  }

}
