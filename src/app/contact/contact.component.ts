import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-contact',
  providers: [UserService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    title: string = 'YoCompute Inc.';
    lat: number = 43.643726;
    lng: number = -79.392305;
    zoom:number = 13;

    public username:string;
    public email:string;
    public phone:string;
    public message:string;

    constructor(private userServ:UserService) { 

    }

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 10000);
    this._success.subscribe((message) => this.successMessage = message);
    debounceTime.call(this._success, 3000).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    this._success.next(`Feedback successfully send.`);
  }

    onSubmitFeedback(){
      let self = this;
      self.changeSuccessMessage();

      this.userServ.postFeedback(this.username, this.email, this.phone, this.message).subscribe(
          (data) => {
            let k = data;
          },
          (err)=>{});
    }


}
