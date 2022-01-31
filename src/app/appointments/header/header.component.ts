import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/utils/models/User';
import { GlobalStoreService } from '../global-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedUser: any;
  time: Date = new Date();

  constructor(
    private globalStore: GlobalStoreService
  ) { 
    this.loggedUser = this.globalStore.getLoggedUser();
  }


  ngOnInit(): void {
    
  }


}

