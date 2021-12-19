import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ComboComponent } from './combo/combo.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.compontent';
import { SpecialityComponent } from './speciality/speciality.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SubscribeComponent,
    BlogComponent,
    TestimonialComponent,
    ComboComponent,
    DownloadsComponent,
    SpecialityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
