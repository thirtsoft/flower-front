import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination' ;

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FaqComponent } from './faq/faq.component';
import { ErrorComponent } from './error/error.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
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
    PortfolioComponent,
    FaqComponent,
    ErrorComponent,
    BlogComponent,
    PagesComponent,
    SuccessEmailComponent,
    TermesComponent,
    PayementComponent,
    CommanderComponent,
    LivraisonComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    /*
    FormsModule, 
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    */
    SharedModule
  //  NgbModule
  ]
})
export class PagesModule { }
