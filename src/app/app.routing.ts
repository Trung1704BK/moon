import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';

import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { VietnamComponent } from './country/vietnam/vietnam.component';
import { ChinaComponent } from './country/china/china.component';
import { JapanComponent } from './country/japan/japan.component';
import {ViewdetailComponent} from './viewdetail/viewdetail.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {SearchComponent} from './search/search.component';
import {ViewdetailchinaComponent} from "./viewdetailchina/viewdetailchina.component";
import {ViewdetailjapanComponent} from "./viewdetailjapan/viewdetailjapan.component";
import {ViewmainwebComponent} from "./viewmainweb/viewmainweb.component";
import {FaultPageComponent} from './fault-page/fault-page.component';
import { AuthComponent } from './auth/auth.component';
import { ServiceGuard } from './guard/service.guard';





const routes: Routes = [
    
    { path: 'home',             component: ComponentsComponent,
    canActivate:[ServiceGuard]
  
  
  },
    { path: 'user-profile',     component: ProfileComponent ,
    canActivate:[ServiceGuard]},
   
    {
      path:'',component:AuthComponent
    },
    {
      path:'', redirectTo:'login',pathMatch:'full'
    },
 
    { path: 'landing',          component: LandingComponent,
    canActivate:[ServiceGuard]


   },
    { path: 'nucleoicons',      component: NucleoiconsComponent,
    canActivate:[ServiceGuard] },
    { path: 'vietnam',          component: VietnamComponent,
    canActivate:[ServiceGuard],
  
  },
    { path: 'china',            component: ChinaComponent ,  canActivate:[ServiceGuard],},
    { path: 'japan',            component: JapanComponent,  canActivate:[ServiceGuard], },
    { path: 'viewdetail/:id',   component: ViewdetailComponent,  canActivate:[ServiceGuard],},
    { path: 'feedback',         component: FeedbackComponent,  canActivate:[ServiceGuard],},
    { path: 'search',           component: SearchComponent,  canActivate:[ServiceGuard],},
    { path: 'viewdetailchina/:id', component: ViewdetailchinaComponent,  canActivate:[ServiceGuard], },
    { path: 'viewdetailjapan/:id', component: ViewdetailjapanComponent ,  canActivate:[ServiceGuard],},
    { path: 'viewmainweb', component: ViewmainwebComponent,canActivate:[ServiceGuard],},
    { path: 'viewmainweb', component: ViewmainwebComponent,canActivate:[ServiceGuard],},
    { path: '**', component: FaultPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
