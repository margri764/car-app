import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './shared/pages/contact-us/contact-us.component';

import { HomeComponent } from './shared/pages/home/home.component';
import { Page404Component } from './shared/pages/page404/page404.component';
import { StartComponent } from './shared/pages/start/start/start.component';

const routes: Routes = [

  
  {
    path: 'cars',
    loadChildren: () => import('../app/cars/cars.module').then( m => m.CarsModule )
  },
  {
    path: 'auth',
    loadChildren: () => import('../app/auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: 'protected',
    loadChildren: () => import('../app/protected/protected.module').then( m => m.ProtectedModule )
  },

  {
    path: "contact-us", component: ContactUsComponent
  },

  {
    path: "inicio", component: HomeComponent
  },

  {
    path: "", redirectTo: "inicio", pathMatch: 'full'
  },
 



  // {
  //   path: 'protected',
  //   loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule )
  // },


   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
