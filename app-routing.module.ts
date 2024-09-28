// import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:'login',component:LoginFormComponent},
  {path:'',component:LoginFormComponent},
  {path:'home',component:MainComponent},
  {path:'products',component:ProductsComponent,
  
  children: [
    { path: 'with-discount', component: ProductsComponent, data: { discount: true } },
    { path: 'without-discount', component:ProductsComponent, data: { discount: false } }

]},
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'comments/:id',component:CommentsComponent},
  {path:'**',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
