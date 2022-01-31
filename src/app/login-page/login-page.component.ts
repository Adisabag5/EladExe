import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { EndPoints, ApiMethods } from '../utils/globals';
import { FormBuilder } from '@angular/forms';
import { GlobalStoreService } from '../appointments/global-store.service';
import { User } from '../utils/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userData: any;
  
  loginForm = this.formBuilder.group({
    name: ''
  });

  constructor(
    private http: HttpService,
    private formBuilder: FormBuilder,
    private globalStore: GlobalStoreService,
    private router: Router

  ) { }

  ngOnInit(): void {
    
  }


  onSubmit(){
    console.log(this.loginForm.value)
    this.http.requestCall(EndPoints.USERS , ApiMethods.GET)
      .subscribe( (result: User[]) => {
                    result.map( (item:User) => {
                      //check if user exist
                      if(this.loginForm.value.name === item.userName ){
                        this.userData = item;
                        this.globalStore.setLoggetUser(item);
                        this.router.navigateByUrl('appointments');
                      }
                      else{
                        //wrong user name
                      }
                    });
                    console.log(result);
                  },
                  error => {
                    console.log(error);
                  }
      );
  }

}
