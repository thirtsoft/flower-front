import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyaccountRoutingModule } from './myaccount-routing.module';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    MyaccountComponent,
    InvoiceComponent,
    UpdatePasswordComponent,
  ],
  imports: [
    CommonModule,
    MyaccountRoutingModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
    
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} },
  ],

  entryComponents: [
    UpdateAccountComponent, UpdatePasswordComponent, InvoiceComponent
  ]
})
export class MyaccountModule { }
