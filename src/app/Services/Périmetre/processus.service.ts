import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessusService {
  public host: string = "http://localhost:8000";

  constructor(private http: HttpClient) { }
  public getprocessus() {
    return this.http.get(this.host+"/api/processuses");

  }
  public delateprocessus(id) {
    return this.http.delete(this.host+"/api/processuses/"+id);

  }
  public updateperietre(id , data) {
    return this.http.put(this.host+"/api/perimetre_politiques/"+id , data);

  }
  public getperimetre() {
    return this.http.get(this.host+"/api/perimetre_politiques");

  }

  public postprocessus(data1) {
    console.log(data1);
    return this.http.post(this.host+"/api/processuses", data1);

  }
}
