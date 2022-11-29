import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-botton-bar',
  templateUrl: './botton-bar.component.html',
  styleUrls: ['./botton-bar.component.scss']
})
export class BottonBarComponent implements OnInit {

  totalPrice: number = 0;
  totalQuantity: number = 0;
  
  constructor(public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus() {
    this.cartService.totalQuantity.subscribe(
      data => {
        this.totalQuantity = data
      }
    )
    this.cartService.totalPrice.subscribe(
      data => {
        this.totalPrice = data
      }
    )

  }

}
