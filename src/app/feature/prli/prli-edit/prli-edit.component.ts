import { Component, OnInit } from "@angular/core";
import { PurchaseRequest } from "src/app/model/purchase-request.class";
import { PurchaseRequestLineItem } from "src/app/model/purchase-request-line-item.class";
import { Product } from "src/app/model/product.class";
import { ProductService } from "src/app/service/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PrliService } from 'src/app/service/prli.service';
import { JsonResponse } from 'src/app/model/json-response.class';

@Component({
  selector: "app-prli-edit",
  templateUrl: "./prli-edit.component.html",
  styleUrls: ["./prli-edit.component.css"]
})
export class PrliEditComponent implements OnInit {
  /* We need to get an array of Products using productSvc.getAll()
   * We also need the get an instance of the PurchaseRequestById()
   */
  title: string = "Purchase Request Line Item Edit";
  purchaserequest: PurchaseRequest;
  purchaserequestlineitem: PurchaseRequestLineItem;
  products: Product[];
  id: string;
  jr: JsonResponse;

  constructor(
    private productSvc: ProductService,
    private prliSvc: PrliService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Subcribe url parameter id to this.id variable and use it to call the prliSvc.get
    this.route.params
      .subscribe(params => {
        this.id = params.id;
        console.log("params.id = ", this.id);
        this.prliSvc.get(this.id)
          .subscribe(jresp => {
            this.jr = jresp;
            this.purchaserequestlineitem = this.jr.data as PurchaseRequestLineItem;
            console.log("current prli: ", this.purchaserequestlineitem);
          })
      })
    // Calls All the Products on the Product table
    this.productSvc.list()
      .subscribe(jresp => {
        this.jr = jresp;
        this.products = this.jr.data as Product[];
        console.log("array of products: ");
      })
  }

    // Initializes when Change Purchase Request Button is clicked
  edit() {
    console.log('purchaserequestllineitem edit component edit method...');
    this.prliSvc.edit(this.purchaserequestlineitem)
      .subscribe(resp => {
        this.jr = resp;
        this.router.navigate(['/purchaserequest/lines']);
      });
  }
}
