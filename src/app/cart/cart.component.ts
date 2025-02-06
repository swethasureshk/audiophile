import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart: any[] = [];

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log(this.cart);
  }

  removeAll() {
    if (confirm("Are you sure you want to remove all items from the cart?")) {
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  reduce(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      if (confirm("Quantity is 1. Do you want to remove this item from the cart?")) {
        const index = this.cart.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
          this.cart.splice(index, 1);
        }
      }
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  increase(item: any) {
    item.quantity++;
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  checkout(){
    const cartElement = this.renderer.selectRootElement('#appCart', true);
    const overlay = this.renderer.selectRootElement('#overlay', true);
    this.renderer.setStyle(cartElement, 'display', 'none');
    this.renderer.setStyle(overlay, 'display', 'none');
    this.router.navigate(['checkout']);

  }
}
