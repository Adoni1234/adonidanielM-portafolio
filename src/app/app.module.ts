import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { layoutPage } from './header/layaut';

import { AboutComponent } from './components/about.component';
import { ExperienceComponent } from './components/experience';
import { ProjectComponent } from './components/Project.component';
import { ContactComponent } from './components/Contact.component';


@NgModule({
  declarations: [
    AppComponent,
    layoutPage,

    AboutComponent,
    ExperienceComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProjectComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
