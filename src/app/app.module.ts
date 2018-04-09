import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PagesModule } from './pages/pages.module';
import { ProjectModule } from './project/project.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

import { ServiceComponent } from './service/service.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'service',
    component: ServiceComponent,
    data: { title: 'Services' }
  },
  {
    path: 'project-form',
    component: ProjectFormComponent,
    data: { title: 'Project'}
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'Portfolio' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us' }
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ProjectModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
