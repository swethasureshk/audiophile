import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'headphones', component: HeadphonesComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'earphones', component: EarphonesComponent },
  {path:'product-details/:id', component: ProductDetailsComponent},
  {path:'checkout', component:BillingComponent}
  // { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
