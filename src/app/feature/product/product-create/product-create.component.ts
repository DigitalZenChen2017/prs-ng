import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import { JsonResponse } from '../../../model/json-response.class';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Product Create';
  jr: JsonResponse;

  // Insert Vendor default values 
  product: Product = new Product(0, new Vendor(0, '', '', '', '', '', '', '', '', false), '', '', 0, '', '');
  vendors: Vendor[];
  
  constructor(private productSvc: ProductService, private vendorSvc: VendorService, private router: Router) { }

  ngOnInit() {
    this.vendorSvc.list()
      .subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.vendors = this.jr.data as Vendor[];
      });
  }

  // Product Create method
  create() {
    this.productSvc.create(this.product)
      .subscribe(jresp => {
        this.jr = jresp;
        this.router.navigate(['/purchaserequest/list']);
      });
  }

}
