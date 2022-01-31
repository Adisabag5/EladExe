import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { EndPoints, ApiMethods } from '../utils/globals';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {

  constructor(
    private http: HttpService
  ) { }

  // getUsers(){
  //   var users_list:any[] = [];
  //   this.http.requestCall(EndPoints.USERS , ApiMethods.GET)
  //     .subscribe( result => {
  //                   // console.log(result);
  //                   users_list = result;
  //                 },
  //                 error => {
  //                   console.log(error);
  //                 }
  //     );
  //     return users_list;
  // }
   

}
