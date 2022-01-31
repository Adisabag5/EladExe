import { Component, OnInit } from '@angular/core';
import { User } from '../utils/models/User';
import { GlobalStoreService } from './global-store.service';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  

  constructor(
    private globalStore: GlobalStoreService
  ) {    }

  ngOnInit(): void {
    this.globalStore.fetchUserAppointments();
  }

}
