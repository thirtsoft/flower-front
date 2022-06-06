import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { UpdateUsernameComponent } from './update-username/update-username.component';

const routes: Routes = [
  {
    path: 'my-account/:id',
    component: MyaccountComponent
  },
  {
    path: 'my-account/:id',
    component: UpdateUsernameComponent
  },
  {
    path: 'my-account/:id',
    component: UpdatePasswordComponent
  },
  {
    path : 'facture/:id',
    component : InvoiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyaccountRoutingModule { }
