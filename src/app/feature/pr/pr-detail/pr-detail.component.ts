import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrService } from '../../../service/pr.service';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-pr-detail',
  templateUrl: './pr-detail.component.html',
  styleUrls: ['./pr-detail.component.css']
})
export class PrDetailComponent implements OnInit {
  title: string = 'Purchase Request Detail';
  jr: JsonResponse;
  purchaserequest: PurchaseRequest;

  constructor(private prSvc: PrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        const id = parms.id;
        this.getPrById(id);
      });
  }

  getPrById(id: string) {
    this.prSvc.get(id)
      .subscribe(jresp => {
        this.jr = jresp;
        this.purchaserequest = this.jr.data as PurchaseRequest;
      })
  }

  remove(): void {
    this.prSvc.delete(this.purchaserequest.id)
      .subscribe(res => {
        this.router.navigateByUrl('/purchaserequest/list');
      });
  }

}
