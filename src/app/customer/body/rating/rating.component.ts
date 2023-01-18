import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { ProductDto } from 'src/app/models/product';
import { RatingDto } from 'src/app/models/rating';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { ProductService } from 'src/app/services/product.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  addRatingDTO = new RatingDto();
  addRatingForm!: NgForm;
  userId: any;
  ref!: string;
  formData!: FormGroup;
  productDTO: ProductDto = new ProductDto();
  currentRating: any = 0;
  maxRatingValue: any = 5;
  isLoggedIn = false;
  username!: string;

  constructor(private ratService: RatingService,
              private prodService: ProductService,
              private tokenService: TokenStorageService,
              public fb: FormBuilder,
              private actRoute: ActivatedRoute,
              private toastr: ToastrService,
  ) { }

  get f() { return this.formData.controls; }


  ngOnInit(): void {
    this.infoForm();
    this.getSingleProductDTO();

    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.ratService.getUserId();
      this.username = user.username;
    }

  }

  infoForm() {
    this.formData = this.fb.group({
      nbreEtoile: [this.currentRating, Validators.required],
      observation: ['', Validators.required],
    });
  }

  onRateChange(event:any) {
    console.log("The selected rate change ", event);
    this.currentRating = event;
  }

  getSingleProductDTO() {
    this.ref = this.actRoute.snapshot.paramMap.get('reference')!;
    this.prodService.getProductDtoByReference(this.ref).subscribe(
      response => {
        this.productDTO = response;
        }
        ,(error: HttpErrorResponse) => {
      alert(error.message);
    });

  }

  onSubmit() {
    this.ratService.addRatingToArticle(this.formData.value, this.ref, this.ratService.id)
      .subscribe(
      (response: RatingDto) => {
        this.toastr.success('avec succès','Note Attribué', {
          timeOut: 4500,
          positionClass: 'toast-top-right',
        });
        console.log('Response--', response);
        this.reload();
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("Note non attribué");
      }

    );

  }

  reload() {
    window.location.reload();
  }


  onSelectFile(event:any) {
    const file = event.target.files[0];
  }

}
