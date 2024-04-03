import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/interface/product';
import { ProductsService } from 'src/app/services/products.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  constructor(private prodServ : ProductsService, private route : ActivatedRoute, 
              private uid : UuidService, private router : Router) { }

  editproductForm! : FormGroup;
  prodId : string = '101';
  prodObj! : Iproduct;
  isInEditMode : boolean = false;

  ngOnInit(): void {
    this.createForm();
    this.route.params
    .subscribe(res => {
      this.prodId = res['productId'];
      
      this.prodObj = this.prodServ.fetchSingleProduct(this.prodId);
      this.editproductForm.patchValue(this.prodObj)
      if(this.prodId){
        this.isInEditMode = true;
      this.route.queryParams.subscribe(res => {
        console.log(res);
        if(res['canReturn']==0){
          this.editproductForm.disable()
        }
        else{
          this.editproductForm.enable()
        }
      })
      }
      else{
        this.isInEditMode = false;
      }
    })
  }

  createForm(){
    this.editproductForm = new FormGroup({
      pName : new FormControl(null),
      pStatus : new FormControl(null)
    })
  }


  onAddProduct(){
    let newProduct = {...this.editproductForm.value, pId : this.uid.uuid()}
    this.prodServ.addProduct(newProduct);
    this.router.navigate(['/products'])
  }

  onUpdate(){
    let updatedObj = {...this.editproductForm.value, pId : this.prodId};
    console.log(updatedObj)
    this.prodServ.updateProduct(updatedObj);
    this.router.navigate(['/products'])
  }
}
