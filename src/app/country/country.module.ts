import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CountryRoutingModule } from './country-routing.module';
import { VietnamComponent } from './vietnam/vietnam.component';
import { ChinaComponent } from './china/china.component';
import { JapanComponent } from './japan/japan.component';
import { AuthComponent } from '../auth/auth.component';



@NgModule({
    imports: [
        CommonModule,
        CountryRoutingModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
    ],
  declarations: [VietnamComponent, ChinaComponent, JapanComponent,AuthComponent]
})
export class CountryModule { }
