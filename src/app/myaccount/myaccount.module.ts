import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyaccountRoutingModule } from './myaccount-routing.module';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateUsernameComponent } from './update-username/update-username.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { SharedModule } from '../shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    MyaccountComponent,
    InvoiceComponent,
    UpdatePasswordComponent,
    UpdateUsernameComponent,
    UpdateAccountComponent
  ],
  imports: [
    CommonModule,
    MyaccountRoutingModule,
    SharedModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class MyaccountModule { }
