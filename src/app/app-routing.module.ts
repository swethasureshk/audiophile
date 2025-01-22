import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { EarphonesComponent } from './earphones/earphones.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect '' to '/home'
  { path: 'home', component: HomeComponent },          // Single route for home
  { path: 'headphones', component: HeadphonesComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'earphones', component: EarphonesComponent },
  { path: '**', redirectTo: '/home' }                  // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
