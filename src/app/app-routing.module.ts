import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './pages/test/test.component';
import { HomeComponent } from './pages/home/home.component';
import { Page2Component } from './pages/page-2/page-2.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'home', component: HomeComponent},
  {path: 'spage', component: Page2Component},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
