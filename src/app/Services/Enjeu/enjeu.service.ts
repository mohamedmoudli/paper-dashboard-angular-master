import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnjeuService {

  public host: string = "http://localhost:8000";

  constructor(private http: HttpClient) { }


  public getTypeEnjeu() {
    return this.http.get(this.host+"/api/type_enjeus");

  }
  public getCategoriesByEnjeu() {
    return this.http.get(this.host+"/CategorieByEnjeu");

  }
  public getCategoriesIntern() {
    return this.http.get(this.host+"/api/categories_enjeu_internes");

  }
  public delateCategoriesIntern(id) {
    return this.http.delete(this.host+"/api/categories_enjeu_internes/"+id);

  }
  public getCategoriesExtern() {
    return this.http.get(this.host+"/api/categories_enjeu_externes");

  }
  public delateCategoriesExtern(id) {
    return this.http.delete(this.host+"/api/categories_enjeu_externes/"+id);

  }
  public CreateCategoriesintern(data) {
    return this.http.post(this.host+"/api/categories_enjeu_internes" , data);

  }
  public CreateCategoriesExtern(data) {
    return this.http.post(this.host+"/api/categories_enjeu_externes" , data);

  }

  public getCountType() {
    return this.http.get(this.host+"/nembreType");

  }


  public getEnjeu() {
    return this.http.get(this.host+"/api/enjeus");

  }
  public saveEnjeu(data) {
    return this.http.post(this.host+"/api/enjeus" , data);

  }
  public delateEnjeu(id) {
    return this.http.delete(this.host+"/api/enjeus/"+id);

  }
  public getCategoriesExternByEnjeu() {
    return this.http.get(this.host+"/CategorieExternByEnjeu");

  }
}
