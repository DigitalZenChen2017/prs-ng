import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PurchaseRequestLineItem } from '../../../model/purchase-request-line-item.class';

import { PrliService } from '../../../service/prli.service';
import { PrService } from '../../../service/pr.service';

@Component({
  selector: 'app-pr-lines',
  templateUrl: './pr-lines.component.html',
  styleUrls: ['./pr-lines.component.css']
})
export class PrLinesComponent implements OnInit {
  title: string = 'Purchase Request Line Items';
  purchaseRequest: PurchaseRequest; // current PurchaseRequest
  purchaseRequestLineItem: PurchaseRequestLineItem;
  purchaseRequestLineItems: PurchaseRequestLineItem[]; // Line Items associated with current PurchaseRequest
  errorMessage: string = '';
  autoApproveMessage: string = '';
  id: string;


  constructor(private prSvc: PrService, private prliSvc: PrliService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // I want to get the current PurchaseRequest item that I'm on
    // This method takes the Activated Route method params and subscribes it
    // to the variable params which is the route path. It sets an const id = to params.id
    // Lastly the instance of purchaserequestSvc.get passes in an id
    // this.route.params.subscribe(parms => this.id = parms.id);
    // console.log("parms.id = " + this.id);

    this.route.params
      .subscribe(params => {
        console.log("params.id = ", params.id);
        this.id = params.id;
        this.getPrById(this.id);
        console.log("current Purchase Request inside this.route.params.subscribe: ", this.purchaseRequest);
        if (params.pr && params.prli) {
          this.prliSvc.delete(params.prli).subscribe(jr => {
            this.router.navigateByUrl('/purchaserequest/lines/' + params.pr);
          });
        }
      });

    this.prliSvc.getAllPRLIsByPR(this.id)
      .subscribe(jresp => {
        this.purchaseRequestLineItems = jresp.data as PurchaseRequestLineItem[];
        console.log('list of prlis: ', this.purchaseRequestLineItems);
      });
  }
  getPrById(id: string) {
    this.prSvc.get(id)
      .subscribe(jresp => {
        this.purchaseRequest = jresp.data as PurchaseRequest;
        console.log("current Purchase Request using getPrById: ", this.purchaseRequest);
      });
  }

  submitForReview(purchaseRequest: PurchaseRequest) {
    if (this.purchaseRequest.status !== 'In Review') {
      this.prSvc.submitForReview(this.purchaseRequest)
        .subscribe(jresp => {
          console.log("submitForReview jr = ", jresp);
          this.purchaseRequest = jresp.data as PurchaseRequest;
          this.router.navigate(['purchaserequest/lines/' + purchaseRequest.id]);
        })
      if (this.purchaseRequest.status === 'Approved') {
        this.autoApproveMessage = 'Purchase Request Less than or Equal to $50.00. Approved!';
      }
    } else {
      // print message saying purchase request has already been submitted for Review
      console.log('error message: Already in Review!')
      this.errorMessage = 'Purchase Request is already in Review!';
    }
  }
}
