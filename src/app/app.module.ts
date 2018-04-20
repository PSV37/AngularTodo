import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomersComponent } from './customers/customers.component';
import { UserComponent } from './user/user.component';
import { EmailComponent } from './email/email.component';
import { HttpModule } from '@angular/http';


const routes : Routes = [
  {path:'product' , component:ProductComponent},
  {path:'user' , component:UserComponent},
  {path:'customer' , component:CustomersComponent},
  {path:'email' , component:EmailComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomersComponent,
    UserComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes
    ),
    FormsModule      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
