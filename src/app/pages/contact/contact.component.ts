import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmailDto } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mailDTO: EmailDto = new EmailDto();
  emails!: EmailDto;

  constructor(private mailService: EmailService,
              public fb: FormBuilder,
              public toastr: ToastrService,
              private router : Router
  ) { }

  ngOnInit(): void {

  }

  sendEmail() {
    this.mailService.sendEmailDTOToManager(this.mailDTO)
      .subscribe(data => {
        console.log(data);
        this.toastr.success('avec succès','Email envoyé', {
          timeOut: 1000,
          positionClass: 'toast-top-right',
        });
        this.router.navigateByUrl("pages/email-success").then(() => {
          window.location.reload();
        });
    });

  }

  onSubmit() {
    this.sendEmail();
  }


}
