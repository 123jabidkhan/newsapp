import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // home page route
  { path:'',redirectTo:'india', pathMatch:'full'},

  // pages module routes
  { path: 'india', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
