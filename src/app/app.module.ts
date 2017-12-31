import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { MatFormFieldModule, MatSliderModule, MatMenuModule,MatProgressSpinnerModule, MatSelectModule, MatOptionModule, MatSlideToggleModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatListModule, MatDialogModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Injector } from '@angular/core/src/di/injector';
import { AppRoutingModule } from './app-routing/app-routing.module';

import 'hammerjs';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FeedbackService } from './services/feedback.service';
import { LoginComponent } from './login/login.component';
import {  baseURL } from './shared/baseurl';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HelpComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSelectModule,
    MatOptionModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    RouterModule,
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  providers: [DishService, PromotionService, LeaderService, ProcessHttpmsgService,FeedbackService,
  { provide : 'BaseURL', useValue : baseURL}],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
