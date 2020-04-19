import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuideutilisationService {
  public host: string = "http://localhost:8000";
  constructor(private http: HttpClient) { }

  public getGuideUtilisation() {
    return this.http.get(this.host+"/api/diffusion_pilotos");

  }
  public delateGuideUtilisation(id) {
    return this.http.delete(this.host+"/api/diffusion_pilotos/"+id);

  }

  public postGuideUtilisation(data1) {
    console.log(data1);
    return this.http.post(this.host+"/api/diffusion_pilotos", data1);

  }
}
