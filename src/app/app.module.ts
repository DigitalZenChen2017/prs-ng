import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './service/user.service';
import { VendorService } from './service/vendor.service';
import { ProductService } from './service/product.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { PrCreateComponent } from './feature/pr/pr-create/pr-create.component';
import { PrDetailComponent } from './feature/pr/pr-detail/pr-detail.component';
import { PrEditComponent } from './feature/pr/pr-edit/pr-edit.component';
import { PrListComponent } from './feature/pr/pr-list/pr-list.component';
import { PrliCreateComponent } from './feature/prli/prli-create/prli-create.component';
import { PrliDetailComponent } from './feature/prli/prli-detail/prli-detail.component';
import { PrliEditComponent } from './feature/prli/prli-edit/prli-edit.component';
import { PrliListComponent } from './feature/prli/prli-list/prli-list.component';
import { FooterComponent } from './core/footer/footer.component';

import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    VendorEditComponent,
    VendorDetailComponent,
    ProductDetailComponent,
    ProductEditComponent,
    PrListComponent,
    PrCreateComponent,
    PrEditComponent,
    PrDetailComponent,
    PrliListComponent,
    PrliCreateComponent,
    PrliEditComponent,
    PrliDetailComponent,
    FooterComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, VendorService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
