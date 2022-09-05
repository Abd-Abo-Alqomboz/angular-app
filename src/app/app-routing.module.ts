import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutasComponent } from './compounent/aboutas/aboutas.component';
import { ContentComponent } from './compounent/content/content.component';
import { HomeeComponent } from './compounent/homee/homee.component';
import { PageNotfoundComponent } from './compounent/page-notfound/page-notfound.component';



const routes: Routes = [
  {
    path : '',
    component :HomeeComponent
  },

  {
    path :'homee',
    component: HomeeComponent
  },

  {
    path : 'aboutas',
    component : AboutasComponent
  
  },
  {
    path :'content',
    component : ContentComponent
  },
  {
    path : 'dashbord',
    loadChildren :()=>import("./admin/admin.module").then(m => m.AdminModule)
    
  },
  {
    path :'**',
    pathMatch:'full',
    component :PageNotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
