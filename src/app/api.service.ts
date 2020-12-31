import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { }

  login(d: any) {
    return this.api.post(`${environment.api_url}login`, d)
  }

  register(d: any) {
    return this.api.post(`${environment.api_url}signup`, d)
  }

  getStaff() {
    let t = localStorage.getItem("token");
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + t);
    const httpOptions = {
      headers: headers_object
    };
    return this.api.get(`${environment.api_url}staff`, httpOptions)
  }

  addStaff(d: any) {
    let t = localStorage.getItem("token");
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + t);
    const httpOptions = {
      headers: headers_object
    };
    return this.api.post(`${environment.api_url}add/staff`, d, httpOptions)
  }

}
