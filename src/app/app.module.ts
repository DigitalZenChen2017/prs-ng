import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDeleteComponent } from './feature/user/user-delete/user-delete.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { VendorDeleteComponent } from './feature/vendor/vendor-delete/vendor-delete.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { PrListComponent } from './feature/pr/pr-list/pr-list.component';
import { PrCreateComponent } from './feature/pr/pr-create/pr-create.component';
import { PrEditComponent } from './feature/pr/pr-edit/pr-edit.component';
import { PrDetailComponent } from './feature/pr/pr-detail/pr-detail.component';
import { PrliListComponent } from './feature/prli/prli-list/prli-list.component';
import { PrliCreateComponent } from './feature/prli/prli-create/prli-create.component';
import { PrliEditComponent } from './feature/prli/prli-edit/prli-edit.component';
import { PrliDetailComponent } from './feature/prli/prli-detail/prli-detail.component';

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
    UserDeleteComponent,
    UserDetailComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorDeleteComponent,
    ProductDetailComponent,
    ProductEditComponent,
    PrListComponent,
    PrCreateComponent,
    PrEditComponent,
    PrDetailComponent,
    PrliListComponent,
    PrliCreateComponent,
    PrliEditComponent,
    PrliDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
