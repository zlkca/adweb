    import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 43.643726;
    lng: number = -79.392305;
    zoom:number = 10;

    constructor() { }

        ngOnInit() {
    }

}
