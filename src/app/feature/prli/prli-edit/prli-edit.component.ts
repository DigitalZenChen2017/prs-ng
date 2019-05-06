import { Component, OnInit } from "@angular/core";
import { PurchaseRequestLineItem } from "src/app/model/purchase-request-line-item.class";
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
  purchaserequestlineitem: PurchaseRequestLineItem;
  jr: JsonResponse;

  /*
  *ERROR in src/app/feature/pr/pr-create/pr-create.component.ts(25,28): error TS2554: Expected 10 arguments, but got 9.
src/app/feature/prli/prli-create/prli-create.component.ts(25,85): error TS2554: Expected 10 arguments, but got 9.

  */

  constructor(
    private prliSvc: PrliService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Subcribe url parameter id to this.id variable and use it to call the prliSvc.get
    this.route.params
      .subscribe(params => {
        console.log("params.id = ", params.id);
        this.prliSvc.get(params.id)
          .subscribe(jresp => {
            this.jr = jresp;
            this.purchaserequestlineitem = this.jr.data as PurchaseRequestLineItem;
            console.log("current prli: ", this.purchaserequestlineitem);
          })
      })
    // // Calls All the Products on the Product table
    // this.productSvc.list()
    //   .subscribe(jresp => {
    //     this.jr = jresp;
    //     this.products = this.jr.data as Product[];
    //     console.log("array of products: ");
    //   })
  }

  // Initializes when Change Purchase Request Button is clicked
  edit() {
    console.log('purchaserequestllineitem edit component edit method...');
    this.prliSvc.edit(this.purchaserequestlineitem)
      .subscribe(resp => {
        this.jr = resp;
        this.router.navigate(['/purchaserequest/lines/' + this.purchaserequestlineitem.purchaseRequest.id]);
      });
  }

  delete(): void {
    this.prliSvc.delete(this.purchaserequestlineitem.id.toString())
      .subscribe(jresp => {
          this.router.navigateByUrl('/purchaserequest/lines/'+this.purchaserequestlineitem.purchaseRequest.id.toString());
      })
    }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }
}
