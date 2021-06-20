import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage } from './home/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { GalleriaModule } from 'primeng/galleria';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { FreeApiService } from './services/freeapi.service';
import { GMapModule } from 'primeng/gmap';
import { FooterComponent } from './footer/footer.component';
import { Galleria } from './Galleria/galleria.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { AccordionModule } from 'primeng/accordion';







@NgModule({
  declarations: [
    AppComponent,
    Homepage,
    FooterComponent,
    Galleria
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GalleriaModule,
    AvatarModule,
    AvatarGroupModule,
    GMapModule,
    MegaMenuModule,
    AccordionModule
  ],
  providers: [FreeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
