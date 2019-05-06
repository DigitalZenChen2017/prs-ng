import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestLineItem } from 'src/app/model/purchase-request-line-item.class';
import { JsonResponse } from '../../../model/json-response.class';

import { PrliService } from 'src/app/service/prli.service';
import { PrService } from 'src/app/service/pr.service';
import { ProductService } from 'src/app/service/product.service';

import { Product } from 'src/app/model/product.class';
import { User } from 'src/app/model/user.class';
import { Vendor } from 'src/app/model/vendor.class';

@Component({
  selector: 'app-prli-create',
  templateUrl: './prli-create.component.html',
  styleUrls: ['./prli-create.component.css']
})
export class PrliCreateComponent implements OnInit {
  title: string = 'Purchase Request Line Item Create';
  jr: JsonResponse;
  purchaserequest: PurchaseRequest;
  purchaserequestlineitem: PurchaseRequestLineItem = new PurchaseRequestLineItem(0, new PurchaseRequest(0, new User(0, '', '', '', '', '', '', false, false), '', '', new Date(), '', '', 0, new Date(), ''), new Product(0, new Vendor(0, '', '', '', '', '', '', '', '', false), '', '', 0, '', ''), 0);
  products: Product[];
  id: string;

  constructor(private productSvc: ProductService, private prliSvc: PrliService, private prSvc: PrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Set previous screen id = this.id
    this.route.params
      .subscribe(params => {
        this.id = params.id;
        console.log("id = " + this.id);
        this.getPRById(this.id);
      });

    // Get Array of Products
    this.productSvc.list().subscribe(jresp => {
      this.jr = jresp;
      this.products = this.jr.data as Product[];
      console.log("List of Products = ", this.products);
    })
  }

  getPRById(id: string) {
    this.prSvc.get(id)
      .subscribe(jresp => {
        this.jr = jresp;
        console.log("getPRById... this.jr = ", this.jr);
        this.purchaserequest = this.jr.data as PurchaseRequest;
        console.log("purchaserequest= ", this.purchaserequest);
      });
  }

  createNewPRLI() {
    this.purchaserequestlineitem.purchaseRequest = this.purchaserequest;
    console.log("purchaserequestlineitem = ", this.purchaserequestlineitem);
    this.prliSvc.add(this.purchaserequestlineitem)
      .subscribe(jresp => {
        this.jr = jresp;
        console.log("added PR: ", this.jr);
        this.router.navigate(['/purchaserequest/lines/' + this.id]);
      })

  }

}
