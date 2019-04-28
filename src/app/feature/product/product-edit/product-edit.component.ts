import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import { JsonResponse } from '../../../model/json-response.class';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Product Edit';

  id: string;
  jr: JsonResponse;

  product: Product;
  vendors: Vendor[];

  constructor(private productSvc: ProductService, private vendorSvc: VendorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.route.params.subscribe(parms => this.id = parms['id']);

    console.log('product edit ngOnInit', 'id = ' + this.id);
    // Subscribes Vendor objects from HTTP Request to JsonResponse objects and set equal to the vendors array
    this.vendorSvc.list()
      .subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.vendors = this.jr.data as Vendor[];
      });
    this.productSvc.get(this.id)
      .subscribe(jresp => {
        this.jr = jresp;
        console.log('1');
        this.product = this.jr.data as Product;
        console.log('product', this.product);
      });
  }

  edit() {
    console.log('product edit component edit method...');
    this.productSvc.edit(this.product)
      .subscribe(resp => {
        this.jr = resp;
        this.router.navigate(['/product/list']);
      });
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }


}
