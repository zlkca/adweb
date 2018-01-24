import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    title: string = 'YoCompute Inc.';
    lat: number = 43.643726;
    lng: number = -79.392305;
    zoom:number = 13;
    private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      
  }

  sendFeedback(username: string, email: string, phone: string, message: string): Observable<any> {
    let self = this;
    const url = this.API_URL + 'signup';
    var body = {"username": username, "email": email, "phone": phone, "message": message};
    let headers = new HttpHeaders().set('Content-Type', "application/json");
    let options = {headers: headers};

    return this.http.post(url, body, options)
      .map((rsp:any) => {
        if (rsp) {
          //localStorage.set('token'+ this.cfg.APP, d.token);
          //return new User(rsp.user);
        } else {
          return null;
        }
      })
      .catch((error:any)=>{
        //console.error('login error occurred', error);
        return Observable.throw(error.message || error);
      });
  }

}
