import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  res: string;
  private Perimeter = new BehaviorSubject<any>(this.res);
  castPerimeter = this.Perimeter.asObservable();

  res1: string;
  private Politics = new BehaviorSubject<any>(this.res1);
  castPolitics = this.Politics.asObservable();
  charingPerimeter(newUser){
    this.Perimeter.next(newUser);
    this.res = newUser ;
  }
  charingPolitics(newUser){
    this.Politics.next(newUser);
    this.res1 = newUser ;
  }

  resultat: string;
  private Process = new BehaviorSubject<any>(this.resultat);
  castProcess = this.Process.asObservable();
  charingProcess(newUser){
    this.Process.next(newUser);
    this.resultat = newUser ;
  }
  public host: string = "http://localhost:8000";

  constructor(private http: HttpClient) { }
  public getprocess() {
    return this.http.get(this.host+"/api/processes");

  }
  public delateprocess(id) {
    return this.http.delete(this.host+"/api/processes/"+id);

  }
  public updateperietre(id , data) {
    return this.http.put(this.host+"/api/perimetre_politiques/"+id , data);

  }
  public getperimetre() {
    return this.http.get(this.host+"/api/perimetre_politiques");

  }

  public postprocess(data1) {
    console.log(data1);
    return this.http.post(this.host+"/api/processes", data1);

  }
}
