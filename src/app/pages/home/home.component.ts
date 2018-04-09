import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServiceComponent } from '../../service/service.component';
import { ContactComponent } from '../../contact/contact.component';
import { PortfolioComponent } from '../../portfolio/portfolio.component';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private translate:TranslateService) { }

  ngOnInit() {
      
  }

}
