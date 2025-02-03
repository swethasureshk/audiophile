import { Component } from '@angular/core';

@Component({
  selector: 'app-headphones',
  standalone: false,
  
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.css'
})
export class HeadphonesComponent {

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
  
  constructor() { }

}
