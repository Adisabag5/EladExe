import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../http/http.service';
import { ApiMethods, EndPoints } from '../utils/globals';
import { Appointment } from '../utils/models/Appointment';
import { User } from '../utils/models/User';

@Injectable({
  providedIn: 'root'
})
export class GlobalStoreService {

  loggedUser: User = new User(-1, '', '', '');
  
  userAppointments = new BehaviorSubject<Appointment[]>([]);
  userAppointmentsObserver = this.userAppointments.asObservable();

  constructor(
    private http: HttpService,

  ) { }

  setLoggetUser(user: User){
    this.loggedUser = user;
  }

  getLoggedUser(){
    return this.loggedUser;
  }

  updateAppointmentsList(updatedUserAppointments: any){
    this.userAppointments.next(updatedUserAppointments);
  }

  fetchUserAppointments(){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("userName",this.loggedUser.userName);
    this.http.requestCall(EndPoints.GET_APPOINTMENTS , ApiMethods.GET_PARAMS, queryParams)
      .subscribe( (result: Appointment[]) => {
                    
                    console.log(result);
                    this.updateAppointmentsList(result);
                  },
                  error => {
                    console.log(error);
                  }
      );
  }
}
