import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import{HttpClientModule} from '@angular/common/http';
import { InfoitemComponent } from './infoitem/infoitem.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuitemComponent,
    InfoitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
