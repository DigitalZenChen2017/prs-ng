import { Component, OnInit } from '@angular/core'; import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../model/product.class';
import { ProductService } from '../../../service/product.service';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Product Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  product: Product;

  constructor(private ProductSvc: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log('product edit ngOnInit', 'id = ' + this.id);
    this.ProductSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        console.log('1');
        this.product = this.jr.data as Product;
        console.log('product', this.product);
      });
  }

  edit() {
    console.log('product edit component edit method...');
    this.ProductSvc.edit(this.product)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/product/list']);
      });
  }


}
