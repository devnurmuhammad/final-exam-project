import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component';
import { BasicServicesComponent } from './components/basic-services/basic-services.component';
import { MainPageMaindivComponent } from './components/main-page-maindiv/main-page-maindiv.component';
import { Page2Component } from './pages/page-2/page-2.component';
import { InfoDivComponent } from './components/info-div/info-div.component';
import { ProjectBoxComponent } from './components/project-box/project-box.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { SixStepsComponent } from './components/six-steps/six-steps.component';
import { ChairComponent } from './components/chair/chair.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { LastComponent } from './components/last/last.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    BasicServicesComponent,
    MainPageMaindivComponent,
    Page2Component,
    InfoDivComponent,
    ProjectBoxComponent,
    OurProjectsComponent,
    SixStepsComponent,
    ChairComponent,
    InstagramComponent,
    CatalogsComponent,
    LastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
