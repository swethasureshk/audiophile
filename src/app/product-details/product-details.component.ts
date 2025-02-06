import { Component } from '@angular/core';
import { ProductService } from '../Services/product-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: false,
  
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productDetailsService: ProductService;
  id:number=0;
  product:any='';
  cartQuantity:number=0;


  constructor(productDetailsService:ProductService, private route: ActivatedRoute,private location:Location,private router: Router){
    this.productDetailsService = productDetailsService;
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(){
    this.productDetailsService.getProducts().subscribe((d) => {
      this.product = d.find(obj => obj.id == this.id);
    });
  }

  goBack(){
    this.router.navigate(['/home']);
  }

  increase(){
    this.cartQuantity+=1;
  }

  reduce(){
    if(this.cartQuantity>0){
      this.cartQuantity-=1;
    }
  }

  addToCart(){
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log(cart);
  let existingProduct = cart.find((item: { id: any; }) => item.id === this.product.id);
  if (existingProduct) {
    existingProduct.quantity += this.cartQuantity;
  } else {
    cart.push({
      "id": this.product.id,
      "slug": this.product.slug,
      "quantity": this.cartQuantity,
      "price": this.product.price,
      "image":this.product.image
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  }
    
  
 
}
