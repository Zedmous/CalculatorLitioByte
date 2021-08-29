import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content.component';


const routes: Routes = [
  {path:'',component:MainContentComponent},
  { path: '**',   redirectTo: '', pathMatch: 'full' }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
