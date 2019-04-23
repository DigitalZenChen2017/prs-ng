import { Component, OnInit } from '@angular/core';
import { JsonResponse } from 'src/app/model/json-response.class';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  products: Product[];
  jr: JsonResponse;

  constructor(private productSvc: ProductService) { }

  ngOnInit() {
    this.productSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.products = this.jr.data as Product[];
      console.log(this.products);
    }
    );

  }

}
