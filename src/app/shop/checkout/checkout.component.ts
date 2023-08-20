import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { CartItem } from 'src/app/models/cart-item';
import { Commande } from 'src/app/models/commande';
import { Country, CountryDto } from 'src/app/models/country';
import { LigneCommande } from 'src/app/models/ligne-commande';
import { Purchase } from 'src/app/models/purchase';
import { State, StateDto } from 'src/app/models/state';
import { CartService } from 'src/app/services/cart.service';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CountryService } from 'src/app/services/country.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  shippingCost: number = 1000;

  currentTime: number = 0;

  listStateDto!: StateDto[];
  listCountryDto!: CountryDto[];

  checkoutFormGroup!: FormGroup;
  formData!: FormGroup;
  submitted = false;

  idUser: any;

  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];
  shippingAddressStates: StateDto[] = [];
  billingAddressStates: StateDto[] = [];

  isLoggedIn = false;
  username: any;
  userId: any;

  constructor(public catalogueService: CatalogueService,
              private cartService: CartService,
              private tokenService: TokenStorageService,
              private countService: CountryService,
              private checkoutService: CheckoutService,
              private statService: StateService,
              private toastr: ToastrService,
              private router: Router,
              private formBuilder: FormBuilder
  ) { }

//  get f() { return this.checkoutFormGroup.controls; }

  ngOnInit(): void {
    this.initForm();
    this.cartDetails();
    this.getListCountryDTOs();
  //  this.getListStateDTOs();
    this.checkoutService.getUserId();

    this.isLoggedIn = !!this.tokenService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.catalogueService.getUserId();
      this.idUser = this.catalogueService.id
      this.catalogueService.getLogginUser();
      this.catalogueService.getUsername();
      this.username = this.catalogueService.username;
      this.userId = this.catalogueService.id;
    }
  }

  initForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        /*
        firstName: [''],
        lastName: [''],
        mobile: [''],
        email: ['']
        */
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
  //      mobile: ['', Validators.required],
        mobile: ['', 
          [
            Validators.required, 
            Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")
          ]
        ],
        email: [''],
      }),

      shippingAddress: this.formBuilder.group({
       /*
        rue: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: ['']
        */

        rue: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zipcode: ['']
      }),

      billingAddress: this.formBuilder.group({
  /*
        rue: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: ['']
*/
        rue: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zipcode: ['']
      }),
      id: this.catalogueService.id
    });
  }

  cartDetails() {
    this.cartItems = this.cartService.cartItems;

    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this.shippingCost = this.cartService.shippingCost;

    this.cartService.calculateTotalPrice();
  }

  getListCountryDTOs() {
    this.countService.getAllActivesCountries().subscribe(
      (response: CountryDto[]) => {
        this.listCountryDto = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }else {
   /*    console.log(this.checkoutFormGroup.get('customer')!.value);
      console.log("Emial is", this.checkoutFormGroup.get('customer')!.value.email);
      console.log("Checkout Value are", this.checkoutFormGroup.value); */

      let commande = new Commande();
      commande.totalCommande = this.totalPrice;
      commande.totalQuantity = this.totalQuantity;

      let lcomms: LigneCommande[] = this.cartItems.map(tempCartItem => new LigneCommande(tempCartItem));

      // setup purchase
      let purchase = new Purchase();

      // populate purchase - customer
      purchase.client = this.checkoutFormGroup.get('customer')!.value;

      // populate purchase - shippingAddress
      purchase.shippingAddress = this.checkoutFormGroup.get('shippingAddress')!.value;
      const shippingState: State = JSON.parse(JSON.stringify(purchase.shippingAddress.state));
      //  console.log(purchase.shippingAddress.state.name);
      const shippingCountry: Country = JSON.parse(JSON.stringify(purchase.shippingAddress.country));
      purchase.shippingAddress.state.name = shippingState.name;
      //  purchase.shippingAddress.state.name = shippingState.name;
      purchase.shippingAddress.country = shippingCountry.name;

      // populate purchase - billingAddress
      purchase.billingAddress = this.checkoutFormGroup.controls['billingAddress'].value;
      const billingState: StateDto = JSON.parse(JSON.stringify(purchase.billingAddress.state));
      const billingCountry: CountryDto = JSON.parse(JSON.stringify(purchase.billingAddress.country));
      //   purchase.billingAddress.state.name = billingState.name;
      purchase.billingAddress.state.name = billingState.name;
       purchase.billingAddress.country = billingCountry.name;

      // populate purchase - order and orderItems

      purchase.commande = commande;
      purchase.lcomms = lcomms;

//      console.log("Conected user is", this.checkoutService.id);

      //  this.checkoutService.placeToOrder(purchase).subscribe(

      this.checkoutService.placeToOrderWithUser(purchase, this.checkoutService.id)
          .subscribe(
            (data:any) =>{
              this.toastr.success('votre commande','Nous avons bien reçu', {
                timeOut: 1500,
                positionClass: 'toast-top-right',
              });
              alert(`Votre numero de commande.\n order tracking number: ${data.orderTrackingNumber}`);
              this.resetCart();
              this.router.navigateByUrl("/shop/success-order");
            },
            error=>{
              alert(`there was a error: ${error.message}`);
              this.toastr.error('valider votre commande','Merci de bien vouloir', {
                timeOut: 1500,
                positionClass: 'toast-top-right',
              });
            }
          )
    }
  }

  copyShippingAddressToBillingAddress(event:any) {
    if (event.target.checked) {
      this.checkoutFormGroup.controls['billingAddress'].setValue(this.checkoutFormGroup.controls['shippingAddress'].value)
        this.billingAddressStates = this.shippingAddressStates;
    }else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
      this.billingAddressStates = [];
    }
  }

  getStates(formGroupName: string) {
    const formGroup = this.checkoutFormGroup.get(formGroupName);
    const countryCode = formGroup!.value.country.code;
    const countryName = formGroup!.value.country.name;

    this.statService.getStates(countryCode).subscribe(
      data => {
        if (formGroupName === 'shippingAddress') {
          this.shippingAddressStates = data;
        }
        else {
          this.billingAddressStates = data;
        }
        // select first item by default
        formGroup!.get('state')!.setValue(data[0]);
      }
    );

  }

  resetCart() {
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);
    this.checkoutFormGroup.reset();
    this.router.navigateByUrl('/products');
  }

  getTS() {
    return this.currentTime;
  }

}