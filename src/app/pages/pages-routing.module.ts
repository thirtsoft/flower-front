import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CommanderComponent } from './commander/commander.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { LivraisonComponent } from './livraison/livraison.component';
import { PagesComponent } from './pages/pages.component';
import { PayementComponent } from './payement/payement.component';
import { SuccessEmailComponent } from './success-email/success-email.component';
import { TermesComponent } from './termes/termes.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'email-success',
    component: SuccessEmailComponent
  },
  {
    path: 'aide-commande',
    component: CommanderComponent
  },
  {
    path: 'aide-paiement',
    component: PayementComponent
  },
  {
    path: 'aide-livraison',
    component: LivraisonComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'temes-conditions',
    component: TermesComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
