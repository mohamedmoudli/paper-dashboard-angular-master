import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnjeuService {

  public host: string = "http://localhost:8000";

  constructor(private http: HttpClient) { }


  public getTypeStake() {
    return this.http.get(this.host+"/api/type_stakes");

  }
  public getCategoryByStake() {
    return this.http.get(this.host+"/GetCategoryInternalByStake");

  }
  public getCategoryInternal() {
    return this.http.get(this.host+"/api/category_stake_internals");

  }
  public delateCategoryInternal(id) {
    return this.http.delete(this.host+"/api/category_stake_internals/"+id);

  }
  public getCategoryExternal() {
    return this.http.get(this.host+"/api/category_stake_externals");

  }
  public delateCategoryExternal(id) {
    return this.http.delete(this.host+"/api/category_stake_externals/"+id);

  }
  public CreateCategoryinternal(data) {
    return this.http.post(this.host+"/api/category_stake_internals" , data);

  }
  public CreateCategoryExternal(data) {
    return this.http.post(this.host+"/api/category_stake_externals" , data);

  }

  public getCountType() {
    return this.http.get(this.host+"/nembreType");

  }


  public getStake() {
    return this.http.get(this.host+"/api/stakes");

  }
  public saveStake(data) {
    return this.http.post(this.host+"/api/stakes" , data);

  }
  public delateStake(id) {
    return this.http.delete(this.host+"/api/stakes/"+id);

  }
  public getCategoryExternalByStake() {
    return this.http.get(this.host+"/GetCategoryExternalByStake");

  }
}
