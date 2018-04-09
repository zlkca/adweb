import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
    email:string;
    description:string;
    phone:string;
    budget:string;
    deadline:string;
    
  constructor() { }

  ngOnInit() {

  }

  saveProject(){

  }
}
