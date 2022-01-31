import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpService } from 'src/app/http/http.service';
import { ApiMethods, EndPoints } from 'src/app/utils/globals';
import { Appointment } from 'src/app/utils/models/Appointment';
import { Doctor } from 'src/app/utils/models/Doctor';
import { GlobalStoreService } from '../global-store.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  doctors: Doctor[] = [];
  selectedDoctor:any;
  selectedHour:any;

  hours: string[] = ['07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00']; 

  appointmentForm = this.formBuilder.group({
    date: '',
    time: '',
    dr: '',
    info: ''
  });

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    private globalStore: GlobalStoreService,
  ) { }

  ngOnInit(): void {
    this.getDoctors();
  }

  setForm(){
    this.appointmentForm = this.formBuilder.group({
      date: '',
      time: '',
      dr: '',
      info: ''
    });
  }

  onSubmit(){
    console.log(this.appointmentForm.value.date)
    let tmpDate = new Date(this.appointmentForm.value.date);
    let appointment: Appointment = {
      userName:  this.globalStore.getLoggedUser().userName,
      docName: this.appointmentForm.value.dr,
      date: String(tmpDate.getDay()+'/'+tmpDate.getMonth()+'/'+tmpDate.getFullYear()+' ,'+this.appointmentForm.value.time),
      info:  this.appointmentForm.value.info
    };

    this.http.requestCall(EndPoints.SET_APPOINTMENT , ApiMethods.POST, appointment)
      .subscribe( (result: Appointment[]) => {
                    
                    this.setForm();
                    this.globalStore.fetchUserAppointments();
                    console.log(result);
                  },
                  error => {
                    console.log(error);
                  }
      );
  }

  getDoctors(){
    this.http.requestCall(EndPoints.GET_DOCTORS , ApiMethods.GET)
      .subscribe( (result: Doctor[]) => {
                    this.doctors = result;
                    
                    console.log(result);
                  },
                  error => {
                    console.log(error);
                  }
      );
  }

}
