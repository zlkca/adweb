import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
