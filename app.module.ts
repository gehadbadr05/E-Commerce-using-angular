import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommentsComponent } from './comments/comments.component';
import { ProductWithDiscountComponent } from './product-with-discount/product-with-discount.component';
import { ProductWithOutDiscountComponent } from './product-with-out-discount/product-with-out-discount.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    PageNotFoundComponent,
    CommentsComponent,
    ProductWithDiscountComponent,
    ProductWithOutDiscountComponent,
    TemplateDrivenFormsComponent,
    LoginFormComponent,
    ReactiveFormsComponent,
 
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
