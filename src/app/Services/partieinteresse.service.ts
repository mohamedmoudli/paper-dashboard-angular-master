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

  public postCategoriesPI(data1) {
    console.log(data1);
    return this.http.post(this.host+"/api/categoriepis", data1);

  }

  public deletCategories(id: number){
    return this.http.delete(this.host+"/api/categoriepis/" + id);
  }

  public postpartieinteresse(data) {
    return this.http.post(this.host+"/api/partieinteresses",data);

  }

  public getpartieinteresse() {
    return this.http.get(this.host+"/all");

  }
  public getpartieinteressebyid(id) {
    console.log(id);
    return this.http.get(this.host+"/partieinteresse/cat/"+id);

  }
  public deletepartieinteresse(id) {
    return this.http.delete(this.host+"/api/partieinteresses/"+id);

  }

}
