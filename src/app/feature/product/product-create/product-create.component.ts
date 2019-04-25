import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import { Vendor } from 'src/app/model/vendor.class';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Product Create';
  resp: any;
  // product: Product = new Product(0, Vendor, '', '', 0, '', '');
  // // (0, Vendor, '', '', 0, '', '');
  product: Product;

  constructor(private productSvc: ProductService, private router: Router) { }

  ngOnInit() {
  }

  // Product Create method
  create() {
    this.productSvc.create(this.product)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }

}
