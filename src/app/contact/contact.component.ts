import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

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

    ngOnInit() {
      
    }

    sendFeedback(){
      let self = this;
      this.userServ.postFeedback(this.username, this.email, this.phone, this.message).subscribe(
          (data) => {
            let k = data;
          },
          (err)=>{});
    }


}
