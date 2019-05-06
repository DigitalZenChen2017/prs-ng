import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaseRequest } from '../../../model/purchase-request.class';
import { PrService } from '../../../service/pr.service';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-pr-edit',
  templateUrl: './pr-edit.component.html',
  styleUrls: ['./pr-edit.component.css']
})
export class PrEditComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Purchase Request Edit';
  id: string;
  jr: JsonResponse;
  purchaseRequest: PurchaseRequest;
  users: User[];

  constructor(private prSvc: PrService, private userSvc: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.route.params.subscribe(parms => this.id = parms['id']);

    console.log('purchaserequest edit ngOnInit', 'id = ' + this.id);
    // Subscribes User objects from HTTP Request to JsonResponse objects and set equal to the users array
    this.userSvc.list()
      .subscribe(jresp => {
        this.jr = jresp as JsonResponse;
        this.users = this.jr.data as User[];
      });
    this.prSvc.get(this.id)
      .subscribe(jresp => {
        this.jr = jresp;
        console.log('1');
        this.purchaseRequest = this.jr.data as PurchaseRequest;
        console.log('purchaserequest', this.purchaseRequest);
      });
  }

  edit() {
    console.log('purchaserequest edit component edit method...');
    this.prSvc.edit(this.purchaseRequest)
      .subscribe(resp => {
        this.jr = resp;
        this.router.navigate(['/purchaserequest/list']);
      });
  }

  compareFn(v1: number, v2: number): boolean {
    return v1 === v2;
  }

}
