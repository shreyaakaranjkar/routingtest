import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpStatus, Iproduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productObj! : Iproduct;
  productId! : string;

  constructor(private prodServ : ProductsService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(res => {
      this.productId = res['productId'];
      // console.log(this.productId)
      this.productObj = this.prodServ.fetchSingleProduct(this.productId);
      console.log(this.productObj)
    })
  }

}
