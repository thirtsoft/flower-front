import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-in-shop',
  templateUrl: './search-in-shop.component.html',
  styleUrls: ['./search-in-shop.component.scss']
})
export class SearchInShopComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  searchProductInShop(keyword: string) {
    console.log("keyword+++", keyword);
    this.router.navigateByUrl('/shop/searchInshop/'+keyword);
  }

}
