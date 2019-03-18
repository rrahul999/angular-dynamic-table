import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { MyservicesService } from './myservices.service';
import { AdddataComponent } from './adddata/adddata.component'

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    AdddataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
