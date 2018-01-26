import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-feedback',
  providers: [UserService],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;
    public username:string;
    public email:string;
    public phone:string;
    public message:string;

  constructor(private userServ:UserService) { }

  ngOnInit() {
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
