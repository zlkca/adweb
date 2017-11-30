    import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 43.799805;
    lng: number = -79.353520;
    zoom:number = 10;

    constructor() { }

        ngOnInit() {
    }

}
