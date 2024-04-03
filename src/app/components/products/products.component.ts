import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsArray! : Array<Iproduct>;
  selId : string ='101'

  constructor(private productServ : ProductsService) { }

  ngOnInit(): void {
    this.productsArray = this.productServ.fetchAllProducts()
  }

}
