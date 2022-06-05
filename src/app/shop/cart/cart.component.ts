import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products:any;
  cart:any;
  cartItem=[]; // for car list show

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  shippingCost: number= 1000;

  currentTime: number = 0;
  isLoggedIn = false;
  username: string='';

  constructor(public catalogueService: CatalogueService,
              private cartService: CartService,
              private tokenService: TokenStorageService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router: Router,
  ) {}

  ngOnInit(): void {
    this.cartDetails();
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
    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.catalogueService.getUserId();
      this.username = user.username;
    }
  }

   // increment quantity
  inCrementQuantity(cartItem: CartItem) {
    console.log('increment quantity', cartItem);
    this.cartService.addTocart(cartItem);
    this.toastr.success('au panier avec succès','Article Ajoutée', {
      timeOut: 1500,
      positionClass: 'toast-top-right',
    });
  }

  // decrement quantity
  decrementQuantity(cartItem: CartItem) {
    console.log('decrement', cartItem);
    this.cartService.decrementQuantity(cartItem);
  }

  removeCart(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

  getTS() {
    return this.currentTime;
  }
  
}
