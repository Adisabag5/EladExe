import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/http/http.service';
import { ApiMethods, EndPoints } from 'src/app/utils/globals';
import { Appointment } from 'src/app/utils/models/Appointment';
import { GlobalStoreService } from '../global-store.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.scss']
})
export class AppointmentsListComponent implements OnInit {

  appointmentsList: Appointment[] = [];

  constructor(
    private http: HttpService,
    private globalStore: GlobalStoreService
  ) { }

  ngOnInit(): void {
    this.setListObserver();
  }

  setListObserver(){
    this.globalStore.userAppointmentsObserver.subscribe(
      list => {
        this.appointmentsList = list;
      }
    );
  }

  deleteAppointment(id: any){
    this.http.requestCall(EndPoints.DELETE_APPOINTMENT , ApiMethods.DELETE, id)
      .subscribe( (result: Appointment[]) => {
                    
                    console.log(result);
                    this.globalStore.fetchUserAppointments();
                  },
                  error => {
                    console.log(error);
                  }
      );
  }

}
