import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { MainComponent } from './main/main.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'table-view',
    component: SearchResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
