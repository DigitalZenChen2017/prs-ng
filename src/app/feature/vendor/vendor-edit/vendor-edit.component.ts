import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor.class';
import { JsonResponse } from '../../../model/json-response.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  title: string = 'Vendor Edit';

  jr: JsonResponse;
  id: string;
  resp: any;

  vendor: Vendor;

  constructor(private VendorSvc: VendorService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log('Vendor edit ngOnInit', 'id = ' + this.id);
    this.VendorSvc.get(this.id)
      .subscribe(jrresp => {
        this.jr = jrresp;
        console.log('1');
        this.vendor = this.jr.data as Vendor;
        console.log('Vendor', this.vendor);
      });
  }

  edit() {
    console.log('Vendor edit component edit method...');
    this.VendorSvc.edit(this.vendor)
      .subscribe(resp => {
        this.resp = resp;
        this.router.navigate(['/vendor/list']);
      });
  }

}
