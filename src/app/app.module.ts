import { NgModule } from '@angular/core';
import { FormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { TowComponent } from './tow/tow.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { HomeeComponent } from './compounent/homee/homee.component';
import { AboutasComponent } from './compounent/aboutas/aboutas.component';
import { ContentComponent } from './compounent/content/content.component';



@NgModule({
  declarations: [
    AppComponent,
    TowComponent,
    LayoutComponent,
    HomeeComponent,
    AboutasComponent,
    ContentComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AppRoutingModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
