import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiMethods, EndPoints } from '../utils/globals'; 

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  methods: ApiMethods = ApiMethods.GET;

  constructor(
    private http: HttpClient
  ) { }

  requestCall(api: EndPoints, method: ApiMethods, data?: any){
    let response: Observable<any> = new Observable;
    switch (method) {
      case ApiMethods.GET:
        response = this.http.get<any>(`${environment.endpoint}${api}`);
        break;
      case ApiMethods.GET_PARAMS:
        response = this.http.get<any>(`${environment.endpoint}${api}`, {params: data} );
        break;
      case ApiMethods.POST:
        response = this.http.post<any>(`${environment.endpoint}${api}`,data);
        break;
      case ApiMethods.PUT:
        response = this.http.put<any>(`${environment.endpoint}${api}`,data);
        break;
      case ApiMethods.DELETE:
        response = this.http.delete<any>(`${environment.endpoint}${api}${data}`);
        break;
      default:
        break;
    }
    return response;
  }
}
