import { Component } from '@angular/core';
import { ProductService } from '../Services/product-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productDetailsService: ProductService;
  id:number=0;
  product:any='';
  cartQuantity:number=0;


  constructor(productDetailsService:ProductService, private route: ActivatedRoute){
    this.productDetailsService = productDetailsService;
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(){
    this.productDetailsService.getProducts().subscribe((d) => {
      this.product = d.find(obj => obj.id == this.id);
      console.log(this.product);
    });
  }
 
}
