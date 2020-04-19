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
  public getCategoriesPI() {
    return this.http.get(this.host+"/api/categoriepis");

  }

  public getCategoriesparPI() {
    return this.http.get(this.host+"/partieinteresse/cat1");

  }
  public getNbreCategories() {
    return this.http.get(this.host+"/nbreCategories");

  }

  public postCategoriesPI(data1) {
    console.log(data1);
    return this.http.post(this.host+"/api/categoriepis", data1);

  }

  public deletCategories(id: number){
    return this.http.delete(this.host+"/api/categoriepis/"+id);
  }

  public postpartieinteresse(data) {
    return this.http.post(this.host+"/api/partieinteresses",data);

  }

  public postExigencePI(data) {
    return this.http.post(this.host+"/api/exigencepis",data);

  }
  public getExigencePI() {
    return this.http.get(this.host+"/GetExigenceByAction");

  }




  public getpartieinteresse() {
    return this.http.get(this.host+"/api/partieinteresses");

  }

  public getpoidsbyid(id , data) {
    console.log(this.http.post(this.host+"/getPoids/"+id ,data));

    return this.http.post(this.host+"/getPoids/"+id ,data);

  }

  public getpipertinante(id) {
    console.log(id);
    return this.http.get(this.host+"/pipertinante/"+id);

  }
  public getpartieinteressebyid(id) {
    console.log(id);
    return this.http.get(this.host+"/partieinteresse/cat/"+id);

  }

  public getNomCategorie() {
    return this.http.get(this.host+"/getNomCategorie");

  }
  public deletepartieinteresse(id) {
    return this.http.delete(this.host+"/api/partieinteresses/"+id);

  }

  public deleteExigence(id) {
    return this.http.delete(this.host+"/api/exigencepis/"+id);

  }
  public updatepartieinteresse(id) {
    return this.http.delete(this.host+"/api/partieinteresses/"+id);

  }

  public savehistoriquePI(seul) {
    return this.http.get(this.host+"/savehistorique/"+seul);

  }

  public gethistoriquePI() {
    return this.http.get(this.host+"/api/historique_p_is");

  }

  public deleteHistorique(id) {
    return this.http.delete(this.host+"/api/historique_p_is/"+id);

  }

}
