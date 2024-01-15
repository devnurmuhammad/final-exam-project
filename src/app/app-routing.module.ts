import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRepairComponent } from './pages/main-repair/main-repair.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'home', component: MainRepairComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
