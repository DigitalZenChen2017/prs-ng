import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from 'src/app/model/purchase-request.class';
import { PurchaseRequestLineItem } from 'src/app/model/purchase-request-line-item.class';
import { PrService } from 'src/app/service/pr.service';
import { PrliService } from 'src/app/service/prli.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-approve-reject',
  templateUrl: './pr-approve-reject.component.html',
  styleUrls: ['./pr-approve-reject.component.css']
})
export class PrApproveRejectComponent implements OnInit {
  title: string = 'Purchase Request Approve/Reject'
  purchaseRequest: PurchaseRequest;
  purchaseRequestLineItems: PurchaseRequestLineItem[];
  approveMessage: string = '';
  reasonForRejection = '';

  constructor(private prSvc: PrService, private prliSvc: PrliService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // subscribes current URL route parameter to params, passes it into the prSvc.get function, and lastly sets the purchaseRequest variable equal to the jr.data
    this.route.params.subscribe(params => {
      this.prSvc.get(params.id).subscribe(prjresp => {
        console.log("jr: ", prjresp);
        this.purchaseRequest = prjresp.data as PurchaseRequest;
        console.log("purchaseRequest: ", this.purchaseRequest);
        this.prliSvc.getAllPRLIsByPR(this.purchaseRequest.id.toString()).subscribe(prlisjresp => {
          console.log("getAllPRLIByPRjr: ", prlisjresp);
          this.purchaseRequestLineItems = prlisjresp.data as PurchaseRequestLineItem[];
          console.log("purchaseRequestLineItems", this.purchaseRequestLineItems);
        })
      })
    })
  }

  approvePurchaseRequest() {
    this.prSvc.approveRequest(this.purchaseRequest).subscribe(prjresp => {
      this.purchaseRequest = prjresp.data as PurchaseRequest;
      this.approveMessage = 'Success! Purchase Request has been approved.'
    })
  }

  rejectPurchaseRequest() {
    this.prSvc.rejectRequest(this.purchaseRequest).subscribe(prjresp => {
      this.purchaseRequest = prjresp.data as PurchaseRequest;
      console.log("Rejected PR: ", this.purchaseRequest);
    })
  }
}
