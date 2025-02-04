import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-earphones',
  standalone: false,
  
  templateUrl: './earphones.component.html',
  styleUrl: './earphones.component.css'
})
export class EarphonesComponent {
  categories = [{
    name: 'HEADPHONES',
    image: 'assets/shared/desktop/image-category-thumbnail-headphones.png',
    description: 'Shop now', 
    link: '/headphones'
  }, {
    name: 'SPEAKERS',
    image: 'assets/shared/desktop/image-category-thumbnail-speakers.png',
    description: 'Shop now',
    link: '/speakers'
  }, {
    name: 'EARPHONES',
    image: 'assets/shared/desktop/image-category-thumbnail-earphones.png',
    description: 'Shop now',
    link: '/earphones'
  }];

  constructor(private router: Router){

  }

  viewDetails(id:number){
    this.router.navigate(['product-details/'+id]);    
  }

}
