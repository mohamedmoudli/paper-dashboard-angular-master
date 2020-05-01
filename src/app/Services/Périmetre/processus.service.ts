import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessusService {
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
