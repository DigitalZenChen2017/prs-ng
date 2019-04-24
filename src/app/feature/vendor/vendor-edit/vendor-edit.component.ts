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
  title: string = 'Vendor Detail';
  jr: JsonResponse;
  Vendor: Vendor;

  constructor(private vendorSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(parms => {
        const id = parms.id;
        this.getUserById(id);
      });
  }

  getUserById(id: string) {
    this.vendorSvc.get(id)
      .subscribe(jsresp => {
        this.jr = jsresp;
        this.Vendor = this.jr.data as Vendor;
      });
  }
  remove(): void {
    this.vendorSvc.delete(this.Vendor.id)
      .subscribe(res => {
        this.router.navigateByUrl('/vendor/list');
      });
  }
}
