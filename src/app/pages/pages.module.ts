import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { ErrorComponent } from './error/error.component';
import { BlogComponent } from './blog/blog.component';
import { SharedModule } from '../shared/shared.module';
import { SuccessEmailComponent } from './success-email/success-email.component';
import { TermesComponent } from './termes/termes.component';
import { PayementComponent } from './payement/payement.component';
import { CommanderComponent } from './commander/commander.component';
import { LivraisonComponent } from './livraison/livraison.component';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ErrorComponent,
    BlogComponent,
    SuccessEmailComponent,
    TermesComponent,
    PayementComponent,
    CommanderComponent,
    LivraisonComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
