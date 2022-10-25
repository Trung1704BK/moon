import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LandingComponent,
    
        ProfileComponent
    ]
})
export class ExamplesModule { }
