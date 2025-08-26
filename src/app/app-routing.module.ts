import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: '', component: HomePageComponent },
   { path: 'homePage', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
