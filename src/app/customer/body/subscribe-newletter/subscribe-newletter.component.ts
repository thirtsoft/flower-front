import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewsletterDto } from 'src/app/models/newsletter';
import { newsletterservice } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-subscribe-newletter',
  templateUrl: './subscribe-newletter.component.html',
  styleUrls: ['./subscribe-newletter.component.scss']
})
export class SubscribeNewletterComponent implements OnInit {

  newsletterDataDTO: NewsletterDto = new NewsletterDto();

  constructor(public crudApi: newsletterservice,
              private toastr: ToastrService,
              private router: Router
  ){ }

  ngOnInit(): void {}

  subscribeToNewLetter() {
    this.crudApi.addNewsletterDTO(this.newsletterDataDTO).subscribe(
      (response: NewsletterDto) => {
        this.toastr.success('avec succès','Inscris à notre newsletter', {
          timeOut: 4500,
          positionClass: 'toast-top-right',
        });
        this.reload();
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Echec de votre inscription");
      }
    );
  }

  reload() {
    window.location.reload();
  }

}
