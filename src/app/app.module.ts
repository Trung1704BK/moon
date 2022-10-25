import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { CountryModule } from './country/country.module';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';
// import { LoginComponent } from './login/login.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { ViewdetailchinaComponent } from './viewdetailchina/viewdetailchina.component';
import { ViewdetailjapanComponent } from './viewdetailjapan/viewdetailjapan.component';
import { ViewmainwebComponent } from './viewmainweb/viewmainweb.component';
import { FaultPageComponent } from './fault-page/fault-page.component';
import { AuthComponent } from './auth/auth.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ViewdetailComponent,
    FeedbackComponent,
    SearchComponent,
    ViewdetailchinaComponent,
    ViewdetailjapanComponent,
    ViewmainwebComponent,
    FaultPageComponent,



    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    CountryModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
